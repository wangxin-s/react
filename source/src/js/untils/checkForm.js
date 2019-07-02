/**
 *
 * 表单选项检测，全局统一调用，所有的检测规则集合在这个插件里
 *
 * 调用方法如下：
 * $.XlCheck({
			val:"183211",
			rule:["Empty","Phone"] //按照你想要的顺序规则来检验，位置靠前最先校验
	});
 * 返回结果格式如下：
 * {
 *   Empty:true,
 *   Phone:false,
 *   result:false //这里result是多个集合规则最后的结果，只要有一个规则是FLASE，那么这个就是FLASE，全部正确返回true
 * }
 */
;(function($){
    var Check=function(opt){
        this.defaults={
            val:'',//默认值
            rule:["Empty","Space"],//检验规则数组
            len:"",//判断值的长度  例如："1,5" 代表是>=1 && <=5  ; "5,10" 代表是 >=5&&<=10 ;"5" 代表 =5; "5,0";代表 >=5
            //这里是所有的正则表达式集合
            baseRule:{
                Empty:/\S/,//是否为空
                Space:/\s/,//是否有空格
                BankCard:/^\d{15,20}$/,//银行卡号规则 15位-20位
                Phone:/^1\d{10}$/,//手机号码
                Deposit:/^[\d-]*$/,//存单号
                Tell:/^\d{3,4}-?\d{7,9}$/,//固定电话
                Name:/^[\u4e00-\u9fa5]+$/,//是否为中文
                Number:/^[0-9]*$/,//验证是否为数字
                Positive:/^[0-9]*[1-9][0-9]*$/,//正整数
                PosFloat:/^[0-9]*[1-9][0-9]*\+?(.\d{1,2})?$/,//正浮点数，最多2位小数
                QQ:/^[1-9]\d{4,14}$/,//QQ
                NumberEng:/^([a-zA-Z0-9]+)$/,//字母和数字
                Email:/^\w{3,}@\w+(\.\w+)+$/,//邮箱
                Cards:'',//身份证
                specialCharacter:/^[\u4e00-\u9fa5\w]+$/,//特殊字符
                Length:'',//检测字符串长度
                Amount:/^(?!00)\d+(\.\d{1,2})?$/,//金额只能输入数字和两位小数
                NumberAndEng:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$///数字和字母的组合  不能是纯数字纯字母     /^[a-zA-Z0-9]*([a-zA-Z][0-9]|[0-9][a-zA-Z])[a-zA-Z0-9]*$/
            }
        },
            this.options=$.extend({},this.defaults,opt)
    }

    Check.prototype={
        init:function(){
            var op=this.options;
            if(op.rule.length>0){
                var obj={};
                var isBaseResult=true;//默认返回最终校验是否为TRUE
                for(var i=0;i<op.rule.length;i++){
                    obj[op.rule[i]]=this.mission(op.rule[i]);//校验规则并返回结果保存在obj对象里
                    switch(op.rule[i]){
                        case "Space":
                            obj[op.rule[i]]=!obj[op.rule[i]];
                            break;
                        default :
                            break;
                    } //针对 空格规则，返回相反的结果
                    if(!obj[op.rule[i]]){
                        isBaseResult=false;//校验失败，设置最终结果为FALSE
                    }
                }
                obj.result=isBaseResult;
                return obj;//返回校验结果集合
            }else{
            }
        },
        mission:function(rule){
            if(rule=="Cards"){
                //单独校验身份证规则
                return this.CheckCard(this.options.val);
            }else if(rule=="Length"){
                //单独校验值长度
                return this.CheckLen(this.options.val);
            }else{
                var reg=this.options.baseRule[rule];//正则
                if(!reg.test(this.options.val)){
                    //校验失败
                    return false;
                }else{
                    //通过校验
                    return true;
                }
            }
        },//校验开始
        CheckLen:function(val){
            var len=this.options.len;
            if(len==""){
                return false;
            }
            len=len.split(',');
            if(len.length==1){
                if(this.GetValLength(val)==len[0]){
                    return true;
                }else{
                    return false;
                }
            }// 解析len="N1"这种
            if(len.length==2){
                if(Number(len[1])==0){
                    if(this.GetValLength(val)>=Number(len[0])){
                        return true;
                    }else{
                        return false;
                    }
                }//解析 字符串大于N1位的情况 (N1,0)

                if(Number(len[0])<Number(len[1])){
                    if(this.GetValLength(val)>=Number(len[0])&&this.GetValLength(val)<=Number(len[1])){
                        return true;
                    }else{
                        return false;
                    }
                }//解析 字符串大于N1位 小于N2位的情况 (N1,N2)
            }//解析len:"N1,N2"这种
            return false;
        },//检测字符串
        GetValLength:function(val){

            return val.length;//产品把汉字也算一个字符，这里直接返回不在进行区分是否为汉字;

            var realLength = 0, len = val.length, charCode = -1;
            for (var i = 0; i < len; i++) {
                charCode = val.charCodeAt(i);
                if (charCode >= 0 && charCode <= 128){
                    realLength += 1
                }else{
                    realLength += 2;
                }
            }
            return realLength;
        },//获取字符串长度，一个汉字代表2个字符
        CheckCard:function(cid){
            cid=cid.toUpperCase();//大写
            if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(cid))){
                return false;
            }
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，数字10可认为是X。
            //分析生日期和校验位
            var len, re;
            len = cid.length;
            if (len == 15){
                re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
                var arrSplit = cid.match(re);
                //检查生日日期是否正确
                var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
                var bGoodDay;
                var BirthDay=Number(arrSplit[4]);
                if(dtmBirth.getHours()==23){
                    BirthDay=Number(arrSplit[4])-1;
                }
                bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == BirthDay);
                if (!bGoodDay){
                    //alert("您输入的身份证号码不正确，请核对后再输入。");
                    return false;
                }else{
                    //将15位身份证转成18位
                    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                    var valnum;
                    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                    var nTemp = 0, i;
                    cid = cid.substr(0, 6) + '19' + cid.substr(6, cid.length - 6);
                    for(i = 0; i < 17; i ++){
                        nTemp += cid.substr(i, 1) * arrInt[i];
                    }
                    cid += arrCh[nTemp % 11];
                    //15位转18位处理时,考虑有效时间段为大于1920年1月1日
                    var reg = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
                    var arrSplitTwo = cid.match(reg);
                    if(Number(arrSplitTwo[2] < 1920)){
                        //alert("请输入出生日期在1920年1月1日后的身份证号码。");
                        return false;
                    }
                }
            }else if(len == 18){
                re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
                var arrSplit = cid.match(re);
                //检查生日日期是否正确
                var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
                var bGoodDay;
                var BirthDay=Number(arrSplit[4]);
                if(dtmBirth.getHours()==23){
                    BirthDay=Number(arrSplit[4])-1;
                }

                bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == BirthDay);
                if (!bGoodDay) {
                    //出生日期不正确
                    return false;
                }else {
                    //检验18位身份证的校验码是否正确。
                    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，数字10可认为是X。
                    var valnum;
                    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                    var nTemp = 0, i;
                    for(i = 0; i < 17; i ++) {
                        nTemp += cid.substr(i, 1) * arrInt[i];
                    }
                    valnum = arrCh[nTemp % 11];
                    if (valnum != cid.substr(17, 1)) {
                        //alert("您输入的身份证号码不正确，请核对后再输入。");
                        return false;
                    }
                }
            }
            return true;//身份证正确，返回TRUE
        }
    }

    $.XlCheck=function(options){
        var xlCheck=new Check(options);
        return xlCheck.init();
    }
})(jQuery);
import React, { Component } from 'react';
import './Infos.css'
class Infos extends Component {
    render() {
        return (
            <div>
                <h1>الإرشادات
                </h1>

                <div class="container container-fluid text-rtl">
            <div class="row mb-5">
                <div class="col-md-12 text-dark" style={{minHeight: 400+'px'}}>
                     

    <div class="mb-5 content">
        <div class="row">
            <div class="col-md-12">
                <h3 style={{fontWeight: 600}}>
                    {/* <img src="assets/images/target-1.png" alt="Alternate Text" style={{width: 27+'px', height: 27+'px',
                        marginTop: -'6px'}}/> */}
                    عملية الدعم المؤقت للأسر العاملة في القطاع غير المهيكل المتضررة من فيروس كورونا
                </h3>
                <p class="line-title">
                </p>
                <p>
                    عملية الدعم المؤقت هي عبارة عن مساعدة مالية تقدمها الدولة لفائدة الأسر العاملة في
                    القطاع غير المهيكل و المتضررة من فيروس كورونا.
                </p>
            </div>
        </div>
        <div class="row" style={{marginTop: 15+'px'}}>
            <div class="col-md-6">
                <p>
                    وستحدد هذه المساعدة المالية على النحو التالي :
                </p>
                <ul>
                    <li>800 درهم للأسرة المكونة من فردين أو أقل</li>
                    <li>1000 درهم للأسرة المكونة من ثلاث إلى أربع أفراد</li>
                    <li>1200 درهم للأسرة التي يتعدى عدد أفرادها أربعة أشخاص</li>
                </ul>
            </div>
            <div class="col-md-6 calendar-box">
                <p style={{marginTop: 15+'px', fontWeight: 700}}>
                    يتم إيداع الطلبات ابتداءا من يوم :
                </p>
                <div style={{textAlign: 'center'}}>
                    <p style={{fontSize: 30+'px', fontWeight: 900, color: '#c1252e', display: 'inline'}}>
                        الاثنين 30 مارس 2020
                    </p>
                    {/* <img src="assets/images/calendar-1.png" alt="Alternate Text" style={{"width":"55px","height":"55px","marginTop":"-20px","marginRight":"25px"}}/> */}
                </div>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-md-6">
                <h3 style={{fontWeight: 600}}>
                    {/* <img src="assets/images/team.png" alt="Alternate Text" style={{width: 27+'px', height: 27+'px',
                        marginTop: -6+'px'}}/> */}
                    الفئة المستهدفة
                </h3>
                <p class="line-title">
                </p>
                <p>
 الأسر التي تعمل في القطاع غير المهيكل و التي أصبحت لا تتوفر على مدخول يومي إثر حالة الطوارئ الصحية المفروضة بالبلاد.
                </p>
            </div>
            <div class="col-md-6 call-box">
                <p style={{color: 'white', marginTop: 15+'px'}}>
                    للمزيد من المعلومات ،يرجى الإتصال بالرقم الأخضر :
                </p>
                <div style={{textAlign: 'center'}}>
                    <p style={{fontSize: 52+'px', fontWeight: 900, color: 'white', display: 'inline'}}>
                        1212
                    </p>
                    {/* <img src="assets/images/phone-call.png" alt="Alternate Text" style={{"width":"55px","height":"55px","marginTop":"-20px","marginRight":"25px"}}/> */}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 style={{fontWeight: 600}}>
                    {/* <img src="assets/images/contract.png" alt="Alternate Text" style={{width: 27+'px', height: 27+'px',
                        marginTop: -6+'px'}}/> */}
                    شروط الاستفادة
                </h3>
                <p class="line-title">
                </p>
                <p>
                    يتم تدبير دعم القطاع غير المهيكل المتأثر مباشرة بالحجر الصحي على مرحلتين :
                </p>
                <h2 style={{color: '#c1252e'}}>
                    المرحلة الأولى :
                </h2>
                <p>
                    على الراغب في الاستفادة من عملية الدعم المؤقت أن يكون مستوفيا للشروط التالية :
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4" style={{textAlign: 'center'}}>
                <div style={{borderRadius: 10+'px', backgroundColor: '#f9f9f9', minHeight: 200+'px'}}>
                    <img src="http://covid19.interieur.gov.ma/assets/images/child.png" alt="Alternate Text" style={{paddingTop: 15+'px'}}/>
                    <h5 style={{padding: '5px 60px 5px 60px', fontWeight: 600}}>
                         أن يكون رب أسرة و منخرطا في نظام التغطية الصحية الراميد
                    </h5>
                </div>
         <i class="fa fa-plus plus-block" aria-hidden="true"></i>
            </div> 
            <div class="col-md-4" style={{textAlign: 'center'}}>
                <div style={{borderRadius: 10+'px', backgroundColor: '#f9f9f9', minHeight: 200+'px'}}>
                    <img src="http://covid19.interieur.gov.ma/assets/images/register.png" alt="Alternate Text" 
                    style={{"width":"107px","height":"97px","paddingTop":"15px"}}/>
                    <h5 style={{padding: '8px 60px 5px 60px', fontWeight: 600}}>
                        أن تكون بطاقة راميد الخاصة به صالحة على الأقل في 31 دجنبر 2019
                    </h5>
                </div>
      <i class="fa fa-plus plus-block" aria-hidden="true"></i>
            </div>

            <div class="col-md-4" style={{textAlign: 'center'}}>
                <div style={{borderRadius: 10+'px', backgroundColor: '#f9f9f9', minHeight: 200+'px'}}>
                    <img src="http://covid19.interieur.gov.ma/assets/images/problem.png" 
                    alt="Alternate Text" style={{paddingTop: 15+'px'}}/>
                    <h5 style={{padding: '5px 60px 5px 60px', fontWeight: 600}}>
                       أن يكون من فئة الأشخاص الذين فقدوا عملهم أو توقف نشاطهم المهني جراء جائحة كورونا
                    </h5>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <br/>
                <h2 style={{color: '#c1252e'}}>
                    المرحلة الثانية :
                </h2>
                <p>
                   على الراغب في الاستفادة من عملية الدعم المؤقت أن يكون مستوفيا للشروط التالية :
                </p>
            </div>
        </div>

          <div class="row">
            <div class="col-md-6" style={{textAlign: 'center'}}>
                <div style={{borderRadius: 10+'px', backgroundColor: '#f9f9f9', minHeight: 200+'px'}}>
                    <img src="http://covid19.interieur.gov.ma/assets/images/child.png" alt="Alternate Text" style={{paddingTop: 15+'px'}}/>
                    <h5 style={{padding: '5px 60px 5px 60px', fontWeight: 600}}>
                       أن يكون رب أسرة
                    </h5>
                </div>
        <i class="fa fa-plus plus-block" aria-hidden="true"></i>
            </div>
          
            <div class="col-md-6" style={{textAlign: 'center'}}>
                <div style={{borderRadius: 10+'px', backgroundColor: '#f9f9f9', minHeight: 200+'px'}}>
                    <img src="http://covid19.interieur.gov.ma/assets/images/problem.png" alt="Alternate Text" style={{paddingTop: 15+'px'}}/>
                    <h5 style={{padding: '5px 60px 5px 60px', fontWeight: 600}}>
                        أن يكون من فئة الأشخاص الذين فقدوا عملهم أو توقف نشاطهم المهني جراء جائحة كورونا
                    </h5>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <h3 style={{fontWeight: 600}}>
                    <img src="assets/images/paper.png" alt="Alternate Text" style={{width: 27+'px', height: 27+'px',
                        marginTop: -6+'px'}}/>
                    عملية إيداع الطلب
                </h3>
                <p class="line-title">
                </p>
                <h2 style={{color: '#c1252e'}}>
                    المرحلة الأولى :
                </h2>
                <p>
                يتم إيداع الطلب عبر إرسال رقم التغطية الصحية لرب الأسرة عبر هاتفه المحمول الشخصي      
                    إلى <span style={{color: '#00aca2',fontWeight: 700}}> الرقم الأخضر 1212</span> (أنظر الصورة أدناه)
                </p>
            </div>
        </div>
        <div class="row">
         
          <div class="col-md-6" style={{textAlign: 'center'}}>


     <img src="http://covid19.interieur.gov.ma/assets/images/sms-photo-2.png" alt="Alternate Text" style={{width: 80+'%',height:'auto',marginRight: 41+'px'}}/>
      

            
            </div>
              <div class="col-md-6 alarm-box">
                <p style={{color: 'white', marginTop: 10+'px',padding: '11px 15px 0px 15px',fontSize: 16+'px'}}>
                   تقدم طلبات الإستفادة من الدعم المؤقت بالنسبة للمرحلة الأولى
                   <u>حصريا</u> 
                    
                    عن طريق رسالة قصيرة إلى الرقم الأخضر 1212
                
                </p>
           
                <div style={{textAlign:"center",marginTop:"60px"}}>
                    
                    <img src="http://covid19.interieur.gov.ma/assets/images/alarm.png" alt="Alternate Text" 
                    style={{"width":"55px","height":"55px","marginTop":"-36px","marginRight":"25px"}}/>
                </div>
            </div>
        </div>
 
        <div class="row">
            <div class="col-md-12">
                <br/>
                <h2 style={{color: '#c1252e'}}>
                    المرحلة الثانية :
                </h2>
                <p>
                    سيتم الإعلان عن كيفية إيداع الطلب في الأيام المقبلة.
                </p>
                <div>المصدر</div>
                <div>
                    <a href = "http://covid19.interieur.gov.ma/Operation_ATTADAMON.aspx">http://covid19.interieur.gov.ma/</a></div>
            </div>
            
        </div>
    </div>


                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Infos;
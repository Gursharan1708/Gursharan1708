$(document).ready(function () {
    
    // /// Sum of Array 
    // const sumOfArray = (array)=>{
    //    $.each(array,()=>{
    //        console.log(array)
    //    })
       
    // }


    /// On Select package
    $('#packname').on('change',function(){
        const valObj = JSON.parse($(this).val())
           $.each(valObj,(key,val)=>{
               $('#'+key).val(val)
           })
      });    


    ///// Form 1st
    $('#calc1').submit(function(e){
        e.preventDefault();
        var tax,pg,adminTax,LC,sum = 0;
        //return alert($('.packAdd').val())
        if(($('.packAdd').val() !== "")){

            $('#total1').text('').css('color','') // reset error
           
            //// Sum of Array
            $.each($('.packAdd') ,(key,val)=>{
               sum += parseFloat($('#'+val['id']).val()) 
            })
            
            $('#total1').text(sum+'$') /// display net Amout

            tax = (sum + (sum*($('#gst').val()))/100); /// GST
            pg = tax +(tax*($('#pg').val()))/100; // Payment Gateway Charges
            LC = pg + (pg*($('#logistic').val()))/100; // Payment Gateway Charges
            adminTax = LC + (LC*($('#adminCharges').val()))/100; // Payment Gateway Charges

            //  console.log(tax.toFixed(2)+'+'+pg.toFixed(2)+'+'+LC.toFixed(2)+'+'+adminTax.toFixed(2))
            $('#totalWithTax').text(adminTax.toFixed(2)+'$')
        }
        else{
           $('#total1').text('Some Values are Empty').css('color','red')
        }
    }) 
    $('#calc2').on('submit',function(event){
        event.preventDefault()
        var total, val1 = $('#directSales').val(), val2 =$('#affiliateSales').val(); 
        if(val1 !== "" && val2 !==""){
            total = parseFloat(val1)+parseFloat(val2)
            
            $('#totalSale').val(total)
               
            if( total <= 1000000){
                const DataJson = {
                    progressBAr:total,
                    qualify:'less than 10 lakh',
                    saleLevel: 'Level 1',
                    dComm:'7',
                    dAmt: (total*7)/100,
                    reward:parseInt(total/7),
                    mile: parseInt((total/7)/100)
                }
               $.each(DataJson,(key,val)=>{
                   $('#'+key).val(val)
               })
            }
            else if(total >= 1000001 && total <= 5000000){
                $('#progressBAr').attr('max','5000000') 
                const DataJson = {
                    progressBAr:total,
                    qualify:'Between 10 lakhs to 50 lakhs',
                    saleLevel: 'Level 2',
                    dComm:'15',
                    dAmt: (total*15)/100,
                    reward:parseInt(total/15),
                    mile: parseInt((total/15)/100)
                }
               $.each(DataJson,(key,val)=>{
                   $('#'+key).val(val)
               })

            }
            else if(total >= 5000001 && total <= 10000000){
                $('#progressBAr').attr('max','10000000')
                const DataJson = {
                    progressBAr:total,
                    qualify:'Between 50 lakhs to 1 crore',
                    saleLevel: 'Level 3',
                    dComm:'20',
                    dAmt: (total*20)/100,
                    reward:parseInt(total/20),
                    mile: parseInt((total/20)/100)
                }
               $.each(DataJson,(key,val)=>{
                   $('#'+key).val(val)
               })

            }
            else if(total >= 10000001 && total <= 50000000){

                $('#progressBAr').attr('max','50000000')
                const DataJson = {
                    progressBAr:total,
                    qualify:'Between 1 crore to 5 crore',
                    saleLevel: 'Level 4',
                    dComm:'25',
                    dAmt: (total*25)/100,
                    reward:parseInt(total/25),
                    mile: parseInt((total/25)/100)
                }
               $.each(DataJson,(key,val)=>{
                   $('#'+key).val(val)
               })
               
            }
            else if(total >= 50000001){

                $('#progressBAr').attr('max','50000000')
                const DataJson = {
                    progressBAr:total,
                    qualify:'More than 5 crore',
                    saleLevel: 'Level 5',
                    dComm:'33',
                    dAmt: (total*33)/100,
                    reward:parseInt(total/33),
                    mile: parseInt((total/33)/100)
                }
               $.each(DataJson,(key,val)=>{
                   $('#'+key).val(val)
               })

            }

        }
        else{
            alert('Please Enter Both the Field')
        }
    }) 
});
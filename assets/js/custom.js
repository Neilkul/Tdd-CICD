// Get form element and input fields

//function validate() {
  //  var name = document.getElementById("name").value;


    //error_message.style.padding = "10px";

    //var text;
    //if (name.length < 5) {
      //  text = "Please Enter valid Name";
        //error_message.innerHTML = text;
        //turn false;
    //}

//}


//const submitButton = document.getElementById("submit_btn");
 // submitButton.addEventListener("click", function(event) {
   // event.preventDefault();
    //document.getElementById("rest_Rrgi_form").submit();
  //});



  function validate()
  {

    var name = document.getElementById("name").value;
    if(!name)
    {
      alert("Please Enter valid Name");
      return false;
    }

   // var  dropdown1 = document.getElementById("Rest_Type").value;
    //if(!dropdown1)
    //{
    // alert("Please choose Restaurant type");
      //return false;
    //}


    var message = document.getElementById("rest_address").value;
    if(!message)
    {
      alert("Please Enter valid Address of Restaurant");
      return false;
    }

    var Contact_person = document.getElementById("Res_con_per").value;
    if(!Contact_person)
    {
      alert("Please Enter Contact person name from restaurant");
      return false;
    }

    var owner = document.getElementById("contact_per").value;
    if(!owner)
    {
      alert("Please Enter Contact Number from restaurant");
      return false;
    }

    var owner = document.getElementById("contact_per").value;
    if(!owner)
    {
      alert("Please Enter Contact Number from restaurant");
      return false;
    }


    var email = document.getElementById("Rest_Email").value;
    if(!email)
    {
      alert("Please Enter Email ID of restaurant");
      return false;
    }

    var pincode = document.getElementById("City_pin").value;
    if(!pincode)
    {
      alert("Please Enter PINCODE of your CITY");
      return false;
    }

    var restaurant_area = document.getElementById("Area_Rest").value;
    if(!restaurant_area)
    {
      alert("Please Enter city area of your restaurant");
      return false;
    }

    var Discount = document.getElementById("Rest_Discount").value;
    if(!Discount)
    {
      alert("Please give a Discount % will u give for customer");
      return false;
    }

    var sitting= document.getElementById("Rest_Sitting").value;
    if(!sitting)
    {
      alert("Please give Your seating capacity of restaurant");
      return false;
    }

    var cover_img= document.getElementById("cover_img").value;
    if(!cover_img)
    {
      alert("Please provide atleast one cover photo of restaurant");
      return false;
    }

    var ambience_img= document.getElementById("Ambience_img").value;
    if(!ambience_img)
    {
      alert("Please provide (MAX 5) photo of restaurant");
      return false;
    }

    var pancard_img= document.getElementById("pan_crd").value;
    if(!pancard_img)
    {
      alert("Please provide PANCARD");
      return false;
    }

    var fssai_img= document.getElementById("food_licen").value;
    if(!fssai_img)
    {
      alert("Please provide FOOD LICENSE");
      return false;
    }

    var rest_open= document.getElementById("rest_open").value;
    if(!rest_open)
    {
      alert("Please provide Restaurant opening time ");
      return false;
    }

    var shop_license_img= document.getElementById("shop_license").value;
    if(!shop_license_img)
    {
      alert("Please provide SHOPACT ");
      return false;
    }

    var rest_close= document.getElementById("rest_close").value;
    if(!rest_close)
    {
      alert("Please provide Restaurant Closing time.");
      return false;
    }

    var meal_time= document.getElementById("meal_time").value;
    if(!meal_time)
    {
      alert("Please provide Restaurant Closing time.");
      return false;
    }
    









  }


  function showPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("show");
  }
  
  function hidePopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("show");
  }
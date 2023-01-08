var payinterval = "";
function validatePassword() {
		var key = document.getElementById('pipassword').value;
		var regex = new RegExp(
				"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
		if (!regex.test(key)) {
			event.preventDefault();
			/* alert("Passwords must have at least 8 characters and contain the following: uppercase letters, lowercase letters, numbers, and symbols."); */
			/* setTimeout(function(){$('#pipassword').focus();},1); */
			$("#strgalrt").show();
			return false;
		}
		$("#strgalrt").hide();
		$("#picpassword").val("");
		$("#validate-status").text("");
		return true;
	}
function validation() {
			$('.num-only').on(
					'keypress',
					function(e) {
						var regex = new RegExp("^[0-9]*$");
						var str = String.fromCharCode(!e.charCode ? e.which
								: e.charCode);
						if (regex.test(str)) {
							return true;
						}
						e.preventDefault();
						return false;
					});
			// Only Number
			$('.alphabet-only').on(
					'keypress',
					function(e) {
						var regex = new RegExp("^[A-Za-z]*$");
						var str = String.fromCharCode(!e.charCode ? e.which
								: e.charCode);
						if (regex.test(str)) {
							return true;
						}
						e.preventDefault();
						return false;
					});
			$('.alpha-numeric').on(
					'keypress',
					function(e) {
						var regex = new RegExp("^[A-Za-z0-9]*$");
						var str = String.fromCharCode(!e.charCode ? e.which
								: e.charCode);
						if (regex.test(str)) {
							return true;
						}
						e.preventDefault();
						return false;
					});
			$('.mob-only').bind(
					'keypress',
					function(event) {
						var s = event.keyCode || event.which;
						var regex = new RegExp("^[0-9]+$");

						var id = $(this).attr("id");
						var value = $("#" + id).val();

						if (value.length < 1) {
							regex = new RegExp("^[6789]+$");
						} else {
							regex = new RegExp("^[0-9]+$");
						}

						var key = String
								.fromCharCode(!event.charCode ? event.which
										: event.charCode);
						if (!regex.test(key) && s != "8" && s != "9"
								&& s != "37" && s != "38" && s != "40") {
							event.preventDefault();
							return false;
						} else if (s == "8" || s == "9" || s == "37"
								|| s == "38" || s == "40") {
							return true;
						}

						if (value.length >= 10) {
							event.preventDefault();
							return false;
						} else {
							return true;
						}
					});
					
					
					
		}
		function err_alertbox(msg) {
			cuteAlert({
				type : "error",
				title : msg,
				buttonText : "Okay"
			})
		}

		function succ_alertbox(msg) {
			cuteAlert({
				type : "success",
				title : msg,
				buttonText : "Okay"
			})
		}

		function info_alertbox(msg) {
			cuteAlert({
				type : "info",
				title : msg,
				buttonText : "Okay"
			})
		}
function confirm_box(msg) {
			cuteAlert({
				type : "success",
				title : msg,
				buttonText : "Okay"
			}).then(() => {
				location.reload();
			})
		}
		function launch_toast(msg, type) {
			cuteToast({
				type : type, // or 'info', 'error', 'warning'
				message : msg,
				timer : 4000
			})
		}
		function validateField(cls) {//_val-data

			var flag = true;
			$('.' + cls).each(
					function() {

						if ($('#' + this.id).siblings("label").hasClass(
								'required')) {
							if (this.value == "") {
								//$('#'+this.id).removeClass('border-0').addClass('border-danger').parent().effect( "shake", { times: 2, distance: 5} );
								$('#' + this.id).siblings().find(
										'.select2-selection').css(
										'border-color', 'red');

								launch_toast($('#' + this.id).attr(
										'placeholder')
										+ ' required', 'error')
								flag = false;
							}
						}
					})

			$('.' + cls).change(
					function() {

						$(this).each(
								function() {
									if (this.value != "") {
										$(this).removeClass('border-danger')
												.addClass('border-1')
										$('#' + this.id).siblings().find(
												'.select2-selection').css(
												'border-color', '');
									} else {
										$(this).removeClass('border-0')
												.addClass('border-danger');
										$('#' + this.id).siblings().find(
												'.select2-selection').css(
												'border-color', 'red');
									}
								})

					})
			if (flag) {
				return flag;
			} else {
				return flag;
			}

		}
		function validateemail(elem) {
			var id = elem;
			var value = $("#" + id).val().trim();
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (!value.match(mailformat) && value != "") {
				err_alertbox("Please Enter Valid Mail Id!!");
				setTimeout(function() {
					$("#" + id).val("").focus();
				}, 1);
				return false;
			}
		}
		
		function Launchdatepicker(id){
	$(function() {

		var start = moment().subtract(29, 'days');
		var end = moment();

		function cb(start, end) {

			
			
			 

		}

		$('#'+id)//input[name="dateRange"]
				.daterangepicker(
						{
							"showDropdowns" : true,
							startDate : start,
							endDate : end,
							ranges : {
								'Today' : [ moment(), moment() ],
								'Yesterday' : [
										moment().subtract(1, 'days'),
										moment().subtract(1, 'days') ],
								'Last 7 Days' : [
										moment().subtract(6, 'days'),
										moment() ],
								'Last 30 Days' : [
										moment().subtract(29, 'days'),
										moment() ],
								'This Month' : [
										moment().startOf('month'),
										moment().endOf('month') ],
								'Last Month' : [
										moment().subtract(1, 'month')
												.startOf('month'),
										moment().subtract(1, 'month')
												.endOf('month') ]
							}
						}, cb).on(
						'apply.daterangepicker',
						function(ev, picker) {
							var startDate = picker.startDate
									.format('DD/MM/YYYY');
							var endDate = picker.endDate
									.format('DD/MM/YYYY');
							
							
							$("#startDate").val(startDate);
							$("#endDate").val(endDate);
							
						});
		$('#'+id).on(
				'cancel.daterangepicker',
				function(ev, picker) {
					$('#'+id).val(
							"Seach By Date Range");
					
				});
		$('#'+id).val("Seach By Date Range");

	});
	/*$('.cal_logo').on('click', function() {
		$(this).siblings().click();
	});*/
}

function getclass(id){
        	
        	
        	$.ajax({
        		  method: "POST",
        		  url: "getclass",
        		  cache: false,
        		  data: { 
        			  userid : $("#userid").val()
        		  }
        		})
        		  .done(function( resp ) {
        			 $("#"+id).empty();
        			 $("#"+id).append('<option value="">--Select--</option>');
        			$.each(resp, function (key, value) {
        			
        				$("#"+id).append('<option value="'+resp[key].ID+'">'+resp[key].CLASS_NAME+'</option>');
        			});
        		     
        		   
        		  })
        		  .fail(function( jqXHR, textStatus ) {
        		    
        		  });
        }
        function getsection(id){
        	
        	
        	$.ajax({
        		  method: "POST",
        		  url: "getsection",
        		  cache: false,
        		  data: { 
        			  userid : $("#userid").val()
        		  }
        		})
        		  .done(function( resp ) {
        			 $("#"+id).empty();
        			 $("#"+id).append('<option value="">--Select--</option>');
        			$.each(resp, function (key, value) {
        			
        				$("#"+id).append('<option value="'+resp[key].ID+'">'+resp[key].SECTION_NAME+'</option>');
        			});
        		     
        		   
        		  })
        		  .fail(function( jqXHR, textStatus ) {
        		    
        		  });
        }
        
        function loadstate(id){
	
	$.ajax({
		  method: "POST",
		  url: "getstatemaster",
		  cache: false,
		  
		})
		  .done(function( resp ) {
			 $("#"+id).empty();
			$("#"+id).append('<option value="">select</option>');
			$.each(resp, function (key, value) {
			$("#"+id).append('<option value="'+resp[key].ID+'">'+resp[key].STATE_NAME+'</option>');
			});
		    
		    
		  })
		  .fail(function( jqXHR, textStatus ) {
		    
		  });
}
        function loaddoctype(id){
	
	$.ajax({
		  method: "POST",
		  url: "getdoctype",
		  cache: false,
		  
		})
		  .done(function( resp ) {
			 $("#"+id).empty();
			$("#"+id).append('<option value="">select</option>');
			$.each(resp, function (key, value) {
			$("#"+id).append('<option value="'+resp[key].DOC_ID+'">'+resp[key].DOC_TYPE+'</option>');
			});
		    
		    
		  })
		  .fail(function( jqXHR, textStatus ) {
		    
		  });
}
 function logout(){
	if (confirm('Are You Sure To Logout ?')) {
	$.ajax({
		  method: "POST",
		  url: "logout",
		  cache: false,
		  
		})
		  .done(function( resp ) {
			 location.href = "/";
		  })
		  .fail(function( jqXHR, textStatus ) {
		    
		  });
		  }
}
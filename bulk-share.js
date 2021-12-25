var xpath = "//a[text()='Add Friend']";
var addfriend = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

addfriend.click();

members = document.querySelector("#space_share_memberships_attributes_new_record_friend_id") || document.querySelector("#kit_share_memberships_attributes_new_record_friend_id") || document.querySelector("#mre_share_memberships_attributes_new_record_friend_id") || document.querySelector("#space_template_share_memberships_attributes_new_record_friend_id");

let frm = document.querySelector(".edit_space_template") || document.querySelector(".edit_kit") || document.querySelector(".edit_space") || document.querySelector(".edit_mre");

console.log(members);

[].forEach.call(  members.querySelectorAll("option")  , function(option){
	if(option.value != ""){
		let field = document.createElement("input");
		field.setAttribute("type","hidden");
		field.setAttribute("value",option.value);
		field.setAttribute("name",members.name);
		frm.appendChild(field);
	}
})

members.remove();

alert(members.length + ' friends have been added.');

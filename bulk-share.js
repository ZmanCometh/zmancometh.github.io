var xpath = "//a[text()='Add Friend']";
var addfriend = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

addfriend.click();

members = document.querySelector("#space_share_memberships_attributes_new_record_friend_id") || document.querySelector("#kit_share_memberships_attributes_new_record_friend_id") || document.querySelector("#mre_share_memberships_attributes_new_record_friend_id") || document.querySelector("#space_template_share_memberships_attributes_new_record_friend_id");

let _field_name_base = members.getAttribute("id");
let shareableID = document.querySelector("#" + _field_name_base.replace("friend","shareable")).value;

let arry = _field_name_base.split("_");

let shareableType = arry[0];
shareableType = shareableType.charAt(0).toUpperCase() + shareableType.slice(1);

_field_name = _field_name_base.replace("_","[");

let frm = document.querySelector(".edit_space_template") || document.querySelector(".edit_kit") || document.querySelector(".edit_space") || document.querySelector(".edit_mre");

function createField(frm,name,value){
	let field = document.createElement("input");
	field.setAttribute("type","text");
	field.setAttribute("value",value);
	field.setAttribute("name",name);
	frm.appendChild(field);
}

let cntr = 0;
[].forEach.call(  members.querySelectorAll("option")  , function(option){
	if(option.value != ""){
		createField(frm,_field_name.replace("_new_record_friend_id","][" + cntr + "][friend_id]"),option.value);
		createField(frm,_field_name.replace("_new_record_friend_id","][" + cntr + "][shareableType]"),shareableType);
		createField(frm,_field_name.replace("_new_record_friend_id","][" + cntr + "][shareable_id]"),shareableID);
		cntr++;
	}
})

members.remove();

alert(members.length + ' friends have been added.');

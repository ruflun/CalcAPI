/// <reference types="jquery" />

// Function used for connecting the buttons to the API calls
function call_api(calltype: string): void {
    let req_url: string = `http://localhost:3000/api/${calltype}?a=${$("#number-a").val()}&b=${$("#number-b").val()}`;

    $.get({
        url: req_url,
        success: (data: any) => {
            $("#text-output").html(data).css("color", "darkgreen");
        },
        error: () => {
            $("#text-output").html("API call failed").css("color", "darkred");
        }
    });

    $("#url-output").html(`API call URL ( ${req_url} )`);

    console.log(req_url);
}

$("#num-add").on("click", () => { call_api("add"); });
$("#num-sub").on("click", () => { call_api("sub"); });
$("#num-mul").on("click", () => { call_api("mul"); });
$("#num-div").on("click", () => { call_api("div"); });
$("#num-pow").on("click", () => { call_api("pow"); });
$("#num-sqrt").on("click", () => { call_api("sqrt"); });
$("#num-min").on("click", () => { call_api("min"); });
$("#num-max").on("click", () => { call_api("max"); });
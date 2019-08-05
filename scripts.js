function siebel_null_variables() {
    var res = "";
    [...document.getElementsByClassName("script")[0].value.matchAll(/var \w+/g)].reverse().forEach(element => {
        res += element[0].split(' ')[1] + " = null;\n";
    });
    document.getElementsByClassName("script")[0].value = res;
}

function siebel_try_catch_finally() {   
    document.getElementsByClassName("script")[0].value = "try\n{\n\n}\ncatch(e)\n{\n\n}\nfinally\n{\n\n}";
}

function siebel_make_function() {
    var res = "function name() {\n\n}";

    document.getElementsByClassName("script")[0].value = res;
}

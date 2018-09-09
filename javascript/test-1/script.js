

function sum() {
    let inputs = [];
    let summed = 0;
    inputs = document.getElementsByName('input');

    for(i = 0; i < inputs.length; i +=1) {
        summed += Number(inputs[i].value);
    }

    document.getElementsByName('sum')[0].value = summed;
}
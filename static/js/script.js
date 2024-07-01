const char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function convert(string) {
    const listNo = [];
    let string2 = string.toLowerCase()
    const list1 = [...string2];
    list1.forEach((i) => {
        if (i == " ") {
            listNo.push(i);
            return;
        }
        listNo.push(char.indexOf(i))});
    return listNo;
}

function modInverse26(A) {
    for (let i = 1; i < 26; i++) {
        if (((A % 26) * (i % 26)) % 26 == 1) {
            return i
        };        
    };
}

function decrypt(key1,key2,chiperText) {
    const resultsNo = [];
    const results = [];
    convert(chiperText).forEach((i) => {
        if (i === " ") {
            resultsNo.push(i);
            return;
        };
        resultsNo.push(((modInverse26(key1)*(i-key2)%26)+26)%26)});
    resultsNo.forEach((i) => {
        if (i === " ") {
            results.push(i);
            return;
        };
        results.push(char[i])
    });
    results.toString();
    return results.join('');
}

function encrypt(key1,key2,plainText) {
    const resultsNo = [];
    const results = [];
    convert(plainText).forEach((i) => {
        if (i === " ") {
            resultsNo.push(i);
            return;
        };
        resultsNo.push((key1*i+parseInt(key2))%26)
    });
    resultsNo.forEach((i) => {
        if (i === " ") {
            results.push(i);
            return;
        };
        results.push(char[i])
    });
    results.toString();
    return results.join('');
}

function cetak() {
    const element = document.getElementById("Decrypt").value;
    const element2 = document.getElementById("keyDecrypt1").value;
    const element3 = document.getElementById("keyDecrypt2").value;
    document.getElementById("hasiPlain").innerHTML = "<b>" + decrypt(element2,element3,element) +"</b>";
}
function cetak2() {
    const element = document.getElementById("Encrypt").value;
    const element2 = document.getElementById("keyEncrypt1").value;
    const element3 = document.getElementById("keyEncrypt2").value;
    document.getElementById("hasilChipher").innerHTML = "<b>" + encrypt(element2,element3,element) +"</b>";
}

// console.log(en)


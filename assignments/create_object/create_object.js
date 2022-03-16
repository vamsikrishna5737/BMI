function CreateObject(arr) {
    // Write your code here
    const person={}
    for (let i=0;i<arr.length;i=i+2){
        person[arr[i]]=arr[i+1];
    }
    return person
}

module.exports = CreateObject;

// very low
function getServe(status: number) {
    if (status === 0) {
        return 'message'
    } else if (status === 1) {
        return 'spa'
    } else if (status === 2) {
        return 'dabaojian'
    }
}
const res = getServe(0)
console.log(res);

// low
const statusObj = {
    MASSAGE: 0,
    SPA: 1,
    DABAOJIAN: 2
}
function getServe2(status: any) {
    if (status === statusObj.MASSAGE) {
        return 'message'
    } else if (status === statusObj.SPA) {
        return 'spa'
    } else if (status === statusObj.DABAOJIAN) {
        return 'dabaojian'
    }
}
// ...

// good
enum Status {
    // MASSAGE,
    MASSAGE = 1,
    SPA,
    DABAOJIAN
}
function getServe3(status: any) {
    if (status === Status.MASSAGE) {
        return 'message'
    } else if (status === Status.SPA) {
        return 'spa'
    } else if (status === Status.DABAOJIAN) {
        return 'dabaojian'
    }
}
console.log(Status.MASSAGE, Status.SPA, Status.DABAOJIAN); // 0 1 2
// 若想得到1 2 3 只需要 MASSAGE = 1
console.log(Status.MASSAGE, Status.SPA, Status.DABAOJIAN); // 0 1 2
console.log(Status.MASSAGE, Status[1]); // 知道下标可以反查

console.log(getServe3(2)); // dabaojian
console.log(getServe3(Status.SPA)); // spa


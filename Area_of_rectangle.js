// /**
//  * @param {number} ax1
//  * @param {number} ay1
//  * @param {number} ax2
//  * @param {number} ay2
//  * @param {number} bx1
//  * @param {number} by1
//  * @param {number} bx2
//  * @param {number} by2
//  * @return {number}
//  */
// var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
//   let ay = Math.pow(ay1 - ay2, 2);
//   let ax = Math.pow(ax1 - ax2, 2);
//   let AB = ay + ax;
//   console.log("length of AB", Math.pow(AB, 1 / 2));

//   let by = Math.pow(by1 - by2, 2);
//   let bx = Math.pow(bx1 - bx2, 2);
//   let CD = by + bx;
//   console.log("length of CD", CD);

//   //  Distance between point 1 of another rectangle  with main rectangle which I let
//   let ay2by1 = Math.pow(ay2 - by1, 2);
//   let ax2bx1 = Math.pow(ax2 - bx1, 2);
//   let BC = ay2by1 + ax2bx1;
//   console.log("length of BC", BC);

//   let ay1by1 = Math.pow(ay1 - by1, 2);
//   let ax1bx1 = Math.pow(ax1 - bx1, 2);
//   let AC = ay1by1 + ax1bx1;
//   console.log("length of AC", AC);

//   //  Distance between point 2 of another rectangle  with main rectangle which I let
//   let ay2by2 = Math.pow(ay2 - by2, 2);
//   let ax2bx2 = Math.pow(ax2 - bx2, 2);
//   let BD = ay2by2 + ax2bx2;
//   console.log("length of BD", BD);
//   let ay1by2 = Math.pow(ay1 - by2, 2);
//   let ax1bx2 = Math.pow(ax1 - bx2, 2);
//   let AD = ay1by2 + ax1bx2;
//   console.log("length of AD", AD);
//   //   area of rectangle formed by (ax1,ay1) and (ax2,ay2)

//   //   ** base of 1st rectangle
//   let AZ = Math.abs(ax2 - ax1);
//   console.log("length of AZ is", AZ);
//   let BZ = Math.abs(ay2 - ay1);
//   console.log("length of BZ is", BZ);

//   let area1 = AZ * BZ;
//   console.log("area of 1 is", area1);

//   // ** base of 2nd rectangle
//   let CR = Math.abs(by1 - by2);
//   console.log("length of CR is", CR);

//   let RD = Math.abs(bx2 - bx1);
//   console.log("length of RD is", RD);

//   let area2 = CR * RD;
//   console.log("area of 2 is", area2);

//   console.log("area of rectangle is ", area1 + area2 - ax2 * by2);

//   if (AB == AC + BC || AB == AD + BD) {
//     console.log("both rectangle merge it self", Math.abs(area1 + area2));
//   }
//   if (AB > AC && AB > BC) {
//     console.log("both rectangle intersect itself", Math.abs(area1 - area2));
//   }
//   if (AB < CD || AB > CD) {
//     console.log(
//       "any one rectangle inside of each other",
//       Math.abs(area1 + area2)
//     );
//   }
// };
// // 1/root 2 =0.70710678118
// const value = computeArea(-3, 0, 3, 4, 0, -1, 9, 2);
// console.log("Area of rectangle", value);
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  //   ** base of 1st rectangle
  if (ax1 == bx1 && ay1 == by1 && ax2 == bx2 && ay2 == by2) {
    let AZ = Math.abs(ax2 - ax1);
    console.log("length of AZ is", AZ);
    let BZ = Math.abs(ay2 - ay1);
    console.log("length of BZ is", BZ);

    let area1 = AZ * BZ;
    console.log("area of 1 is", area1);

    // ** base of 2nd rectangle
    let CR = Math.abs(by1 - by2);
    console.log("length of CR is", CR);

    let RD = Math.abs(bx2 - bx1);
    console.log("length of RD is", RD);

    let area2 = CR * RD;
    console.log("area of 2 is", area2);

    return area2;
  } else if (ax1 != bx1 && ay1 != by1 && ax2 != bx2 && ay2 != by2) {
    let l1 = Math.abs(ax1);
    let l2 = Math.abs(ax2);
    let length1 = l1 + l2;
    let b1 = Math.abs(ay1);
    let b2 = Math.abs(ay2);
    let breadth1 = b1 + b2;
    areal1 = length1 * breadth1;

    let l3 = Math.abs(bx1);
    let l4 = Math.abs(bx2);
    let length2 = l3 + l4;
    let b3 = Math.abs(by1);
    let b4 = Math.abs(by2);
    let breadth2 = b3 + b4;
    areal2 = length2 * breadth2;
    return;
    areal1 + areal2;
  } else {
    let AZ = Math.abs(ax2 - ax1);
    console.log("length of AZ is", AZ);
    let BZ = Math.abs(ay2 - ay1);
    console.log("length of BZ is", BZ);

    let area1 = AZ * BZ;
    console.log("area of 1 is", area1);

    // ** base of 2nd rectangle
    let CR = Math.abs(by1 - by2);
    console.log("length of CR is", CR);

    let RD = Math.abs(bx2 - bx1);
    console.log("length of RD is", RD);

    let area2 = CR * RD;
    console.log("area of 2 is", area2);

    return area1 + area2 - ax2 * by2;
  }
};

const values = computeArea(-2, -2, 2, 2, 3, 3, 4, 4);
console.log(values());

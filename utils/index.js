
// Common JS
// - CommonJS sử dụng require và module.exports.
// - CommonJS được load và thực thi tại thời điểm chạy.
// - CommonJS là hệ thống module mặc định trong Node.js (trước Node.js 12)


// ES Module
// - sử dụng import và export
// -  ES Module thường được biên dịch trước, giúp cải thiện hiệu suất
// - Node.js từ phiên bản 12 trở đi
// - Là tiêu chuẩn mới, được nhiều framework hiện đại hỗ trợ.

function sum (a, b) {
    return a + b;
}

export const subtraction =  (a, b) => a - b;

// - export các thành phần
export const calculate = {
    sum
}


// export một thành phần chính và không muốn đặt tên cho nó.
export default function hello () { 
    return "hello world";
}

// module.exports = {
//     sum,
//     subtraction
// }


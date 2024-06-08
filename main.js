// let urunish = alert("salom sizda 1dan 100gacha berkitilgan raqam bor siz uni topishingiz kerak ")
// let kiritish = +prompt("Sonni kiriting urinishlar soni:3ta")
// let number = 21
// if (kiritish == number) {
//  let zor =alert("Siz tog'ri toptingiz") 
// }
// else if (kiritish < number) {
//     alert("Siz to'g'ri toplamadingiz bu son berkitilgan sonda kichkina")
//     prompt("Siz topaolmadingiz boshqattan kiriting ")
// } else if (kiritish > number) {
//      alert("Siz topaolmadingiz bu son berkitilgan sonda katta")
//      prompt("Siz topaolmadingiz boshqattan kiriting ")
// }
// else{
//     alert(`Siz topaolmadingiz bu son ${number} edi`)
// }
let urunish = alert("salom sizda 1dan 100gacha random raqam bor siz uni topishingiz kerak ")
 let UserNum = Math.floor(Math.random() * 100);
let kiritish = +prompt("Sonni kiriting urinishlar soni:3ta")
for (let i = 0; i < 3; i++){
    if (kiritish == UserNum) {
        alert("Siz tog'ri toptingiz") 
    }
    else if (kiritish < UserNum) {
        kiritish = +prompt("Siz topaolmadingiz boshqattan kiriting bu son berkitilgan sondan kichkina ")
    } else if (kiritish > UserNum) {
         kiritish = +prompt("Siz topaolmadingiz boshqattan kiriting  bu son berkitilgan sondan katta")
    }
}
alert(`siz bu sonni topaolmadingiz random son ${UserNum}edi`)
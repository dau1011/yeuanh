// Danh sách thông điệp tình cảm (cơ hội xuất hiện ngang nhau)
const messages = [
    "Không cần một trải bài nào để nhìn thấu tương lai, vì thông điệp rõ ràng nhất của vũ trụ hôm nay là: Em yêu anh ❤️",
    "Lá này nói khá rõ: có người nhớ bạn.(Bé dâu đấy!)",
    "Tần số rung động hôm nay cực kỳ hoàn hảo. Vũ trụ gửi đến anh một ngày may mắn và ngập tràn niềm vui!",
    "Góc hợp của các hành tinh cho ra tín hiệu rằng anh nên nghỉ ngơi (và nói yêu em)",
    "Đừng suy nghĩ nhiều, mọi chuyện cứ để em lo",
    "Vũ trụ gửi tới anh rằng: PHẢI YÊU MÌNH ĐÓ NHAAA",
"Lá bài không nói ngày mai sẽ thế nào, nhưng em có thể đảm bảo ngày mai vẫn sẽ thích anh.",
"Có một dấu hiệu cảnh báo về chuyện tình cảm... hình như vợ bạn đang dỗi đấy!!!",
"Lá bài này được xem là tín hiệu thuận lợi cho 1 ngày mới suông sẻ!",
"Nếu hôm nay gặp chuyện không vui, hãy nhớ: một lá bài xấu không quyết định cả trải bài, cũng như một ngày tệ không quyết định cả cuộc đời.",
    "Hôm nay các góc sao không hợp nhau, vì hôm nay anh chưa nói yêu em!",
"Hôm nay nếu có ai làm bạn buồn, hãy nhớ rằng vũ trụ đã cấp cho bạn quyền block.",
"Vũ trụ gửi tín hiệu rằng hôm nay bạn cần được yêu thương. (DÂU ĐANG RÃNH NÈ!!!!!!.).",
"Lá bài bảo bạn nên tránh năng lượng tiêu cực. (Vì vậy hãy tránh xa deadline và đến gần BÉ DÂU!.)",
"Hôm nay nhớ phải ăn uống đầy đủ!",
"Đừng tự trách mình vì những chuyện đã qua.",
"Lá này nhắc bạn thương mình trước nhé.",
"Bạn sẽ ổn thôi.",
"Bạn xứng đáng được yêu.",
"Có người luôn đứng về phía bạn.",
"Nếu hôm nay anh mệt thì cứ nghỉ. Nếu hôm nay anh buồn thì cứ buồn một chút. Không cần lúc nào cũng phải vui vẻ đâu. Em vẫn ở đây.",
    "Mình nghiêng về khả năng mình nhớ cún hơn, nhưng khả năng cún nhớ mình vẫn chưa bị loại trừ (chắc thế)."
];

// Hàm bốc ngẫu nhiên 1 câu
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Lắng nghe sự kiện click vào nút bấm
document.getElementById('drawButton').addEventListener('click', function() {
    const card = document.getElementById('gachaCard');
    const messageDisplay = document.getElementById('messageDisplay');
    
    // Kiểm tra xem bài đã lật chưa (chỉ cho lật 1 lần)
    if (!card.classList.contains('flipped')) {
        
        // 1. Lấy chữ nhét vào HTML
        messageDisplay.innerText = getRandomMessage();
        
        // 2. Kích hoạt hiệu ứng lật 3D
        card.classList.add('flipped');
        
        // 3. Đổi trạng thái nút bấm
        this.innerText = "ĐÃ NHẬN THÔNG ĐIỆP";
        this.disabled = true; 
    }
});
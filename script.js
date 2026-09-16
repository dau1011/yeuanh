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

// Khóa bấm khi mới vào web để chạy hiệu ứng chia bài
let isPicked = true; 

window.onload = () => {
    // Đợi 0.5s rồi phát bài bay từ cọc ra
    setTimeout(dealCards, 500); 
};

// Hàm Ma Thuật: Phát bài từ cọc (Dealing)
function dealCards() {
    const allCards = document.querySelectorAll('.card');
    
    // Rút từng lá từ cọc bên phải phóng ra thành hình quạt
    allCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.remove('stacked');
        }, index * 90); // Mỗi lá bay ra cách nhau 0.09 giây
    });

    // Sau khi lá cuối cùng bay ra xong thì mới cho phép người dùng bốc bài
    setTimeout(() => {
        document.getElementById('instructionText').innerText = "Hãy chạm vào một lá bài thuộc về anh...";
        isPicked = false;
    }, allCards.length * 90 + 400); 
}

function pickCard(selectedCard) {
    if (isPicked) return; 
    isPicked = true;

    document.getElementById('instructionText').innerText = "Vũ trụ đã hồi đáp...";

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    selectedCard.querySelector('.message-text').innerText = randomMsg;

    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        if (card === selectedCard) {
            card.classList.add('picked');
        } else {
            card.classList.add('hidden');
        }
    });

    setTimeout(() => {
        document.getElementById('resetButton').style.display = 'inline-block';
    }, 1500);
}

function resetCards() {
    isPicked = true; 
    
    document.getElementById('instructionText').innerText = "Đang gom bài lại...";
    document.getElementById('resetButton').style.display = 'none';

    const allCards = document.querySelectorAll('.card');
    
    // Trả tất cả bài về lại cọc bên tay phải
    allCards.forEach(card => {
        card.classList.remove('picked', 'hidden');
        card.classList.add('stacked');
    });

    // Đợi 0.7s để gom bài xong thì xòe ra lại
    setTimeout(() => {
        document.getElementById('instructionText').innerText = "Đang chia bài...";
        dealCards();
    }, 700);
}

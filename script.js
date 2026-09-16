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

// Khóa click ngay từ đầu để tránh người dùng bấm lúc bài đang xào
let isPicked = true; 

// TỰ ĐỘNG XÀO BÀI VÀ CHIA KHI VỪA VÀO WEB
window.onload = () => {
    setTimeout(shuffleAndDeal, 500); // Đợi 0.5s rồi mới bắt đầu xào cho mượt
};

// Hàm Ma Thuật: Xào và Chia Bài
function shuffleAndDeal() {
    const allCards = document.querySelectorAll('.card');
    
    // 1. Chẻ bài làm 2 nửa để xào
    allCards.forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('shuffling-left');
        } else {
            card.classList.add('shuffling-right');
        }
    });

    // 2. Đợi xào xong (1 giây) thì bắt đầu chia bài
    setTimeout(() => {
        allCards.forEach((card, index) => {
            // Dừng hiệu ứng xào
            card.classList.remove('shuffling-left', 'shuffling-right');
            
            // Chia lần lượt từng lá một tạo thành hình quạt (mỗi lá cách nhau 80ms)
            setTimeout(() => {
                card.classList.remove('stacked');
            }, index * 80); 
        });

        // Mở khóa click sau khi lá bài cuối cùng đã chia xong
        setTimeout(() => {
            isPicked = false;
        }, allCards.length * 80 + 300); 

    }, 1000);
}

// Hàm Bốc Bài
function pickCard(selectedCard) {
    if (isPicked) return; // Nếu đang bị khóa (đang xào bài hoặc đã bốc rồi) thì bỏ qua
    isPicked = true;

    // Font EB Garamond sẽ tự động áp dụng do đã cài trong CSS
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

// Hàm Trộn & Rút Tiếp
function resetCards() {
    isPicked = true; // Khóa click trong lúc thu bài
    
    document.getElementById('instructionText').innerText = "Đang kết nối lại với vũ trụ...";
    document.getElementById('resetButton').style.display = 'none';

    const allCards = document.querySelectorAll('.card');
    
    // Thu toàn bộ bài đang bay lả tả về lại thành 1 cọc
    allCards.forEach(card => {
        card.classList.remove('picked', 'hidden');
        card.classList.add('stacked');
    });

    // Đợi 0.6s cho bài thu về giữa xong thì chạy hiệu ứng xào và chia
    setTimeout(() => {
        document.getElementById('instructionText').innerText = "Hãy chạm vào một lá bài thuộc về anh...";
        shuffleAndDeal();
    }, 600);
}

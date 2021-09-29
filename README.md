# Music-Chilling
Bot được chạy ở discrd.js v13

### Cách setup bot
Để setup bot thì bạn có thể sử dụng heroku hoặc self hosting (vps riêng,...), thậm chí là trên chính máy của bạn

### Một số yêu cầu
Bạn phải sử dụng nodejs v16.6.1 trở lên để hoạt động tốt nhất
Đối với heroku thì host có sẵn nodejs v16

### Cách host bot
Xem cách tạo bot riêng cho mình tại **[đây](https://polowis.home.blog/2019/01/21/huong-dan-tao-bot-tren-discord-p1/)**

### Cho bot hoạt động
Vào phần `config.json` để thay đổi 1 số giá trị bạn mong muốn
Hãy paste TOKEN ở trang developer của bot của bạn vào phần `.env.example` (TOKEN=<Tại đây>) và đổi tên file thành `.env`
Tải thư viện cho bot: `npm i`
Gõ `node .` để bật bot sau khi setup xong

### Lưu ý
Không tiếc lộ TOKEN, và TOKEN sẽ được bảo mật bằng .env
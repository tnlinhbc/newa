function kiemtra() {
    var bq = document.frBieuQuyet.bq.value;
    if (bq == '') {
        alert('bạn chưa chọn mục để biểu quyết');
        return false;
    }
    if (bq == 'Mục thông tin thống kê') {
        alert('Bạn đã biểu quyết Mục thông tin thống kê');
        return false;
    }
    if (bq == 'Niên giám thống kê') {
        alert('Bạn đã biểu quyết Niên giám thống kê');
        return false;
    }
    if (bq == 'Tin tức - Sự kiện ngành thống kê') {
        alert('Bạn đã biểu quyết Tin tức - Sự kiện ngành thống kê');
        return false;
    }
    if (bq == 'Kết quả điều tra') {
        alert('Bạn đã biểu quyết Kết quả điều tra');
        return false;
    }
    if (bq == 'Khác') {
        alert('Bạn đã biểu quyết Khác');
        return false;
    }

}
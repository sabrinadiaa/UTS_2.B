
import java.util.List;
import java.math.BigDecimal;

// 1. Class Pembeli
class Pembeli {
    private int idPembeli;
    private String nama;
    private String email;

    public void buatOrder() {}
    public void transfer(BigDecimal totalAmount, String merchantAccount) {}
    public void menerimaBuktiPembayaran() {}
}


// 2. Class Merchant
class Merchant {
    private int idMerchant;
    private String namaMerchant;
    private String merchantAccount;

    public String getMerchantAccount() {}
    public boolean verifyTransfer() {}
    public void konfirmasiTransfer() {}
}


// 3. Class Order
class Order {
    private int idOrder;
    private Pembeli pembeli;
    private List<OrderDetail> orderDetails;
    private BigDecimal totalAmount;
    private String statusOrder;

    public void create() {}
    public BigDecimal calculateTotal() {}
    public void checkoutAndComplete() {}
}


// 4. Class OrderDetail
class OrderDetail {
    private int idOrderDetail;
    private Produk produk;
    private int quantity;
    private BigDecimal price;
    private BigDecimal subtotal;

    public void setId(int id) {}
    public void setQuantity(int quantity) {}
    public BigDecimal subTotal() {}
}


// 5. Class Produk
class Produk {
    private int idProduk;
    private String namaProduk;
    private BigDecimal harga;

    public BigDecimal getPrice(int id) {}
}


// 6. Class Pembayaran
class Pembayaran {
    private int idPembayaran;
    private BigDecimal totalAmount;
    private String merchantAccount;
    private String statusPembayaran;
    private String paymentProof;

    public void transfer(
        BigDecimal totalAmount,
        String merchantAccount
    ) {}

    public boolean verifyTransfer() {}
    public void paymentProofGenerated() {}
}


// 7. Class EmailService
class EmailService {
    private String recipientEmail;
    private String orderPdf;
    private String paymentReceipt;

    public void sendOrderPdfAndReceipt(String email) {}
    public void deliverEmail() {}
}

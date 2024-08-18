

function WhatsAppRedirect() {
  return (
    <a
      href="https://wa.me/917678121394?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#ffffff',
        color: '#25D366',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '16px'
      }}
      className="border rounded-lg shadow-md"
    >
      Chat with us on WhatsApp
    </a>
  );
}

export default WhatsAppRedirect;

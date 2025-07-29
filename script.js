function downloadVCF() {
    // Create the VCF content
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
N:Mohyeldin;Yahia Abdelfattah;;;
FN:Yahia Abdelfattah Mohyeldin
ORG:GOTCHA Creative Consultancy & Services
TITLE:Director of Client Solutions
TEL;TYPE=WORK,VOICE:+971-50-3939345
TEL;TYPE=CELL,VOICE:+971-58-6607899
ADR;TYPE=WORK:;;Abu Dhabi – UAE;;;;
EMAIL;TYPE=PREF,INTERNET:hello@gotchacreative.com
URL:https://gotchacreative.com
X-SOCIALPROFILE;type=linkedin:https://www.linkedin.com/company/gotcha-creative-consultancy-uae/
X-SOCIALPROFILE;type=instagram:https://instagram.com/gotchacreative.ae
END:VCARD`;

    // Create a blob with the VCF content
    const blob = new Blob([vcfContent], { type: 'text/vcard' });
    
    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Yahia_Abdelfattah_Mohyeldin.vcf';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Add smooth hover effects
document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');
    const addContactBtn = document.querySelector('.add-contact-btn');
    
    // Add ripple effect to button
    addContactBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .add-contact-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.1);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


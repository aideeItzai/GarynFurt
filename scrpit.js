document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const thankYouMessage = document.getElementById('thankyou-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

       
        const csvContent = `data:text/csv;charset=utf-8,Nombre,Correo,Número\n${name},${email},${phone}\n`;


        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'form-data.csv');
        document.body.appendChild(link); 

        link.click(); 

       
        thankYouMessage.classList.remove('hidden');
        
        
        form.reset();
    });

 
    const photos = document.querySelectorAll('.photo-gallery img');

    const handleScroll = () => {
        photos.forEach((photo) => {
            const photoPosition = photo.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (photoPosition < windowHeight - 100) {
                photo.style.opacity = '1';
                photo.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});

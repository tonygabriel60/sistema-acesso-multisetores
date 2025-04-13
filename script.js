const formulario = document.querySelector('form');
const divErro = document.getElementById('msg-erro');

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path.endsWith('/')) {
        return 'index';
    } else if (path.includes('comercial.html')) {
        return 'comercial';
    } else if (path.includes('rh.html')) {
        return 'rh';
    } else if (path.includes('ti.html')) {
        return 'ti';
    }
    return null;
}

if (getCurrentPage() === 'index' && formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;
        const setor = document.querySelector('input[name="setor"]:checked').value;

        // Validação
        if (setor === "1" && usuario === "CMCL12" && senha === "Com&c1@l") {
            window.location.href = "comercial.html";
        } else if (setor === "2" && usuario === "98HR" && senha === "RH!@2025") {
            window.location.href = "rh.html";
        } else if (setor === "3" && usuario === "DEV4567TI" && senha === "IT&&||==2025") {
            window.location.href = "ti.html";
        } else {
            divErro.textContent = "Usuário, senha ou setor incorretos. Tente novamente.";
            divErro.style.color = "red";
        }
    });
}

if (getCurrentPage() === 'rh') {
    const showTableBtn = document.getElementById('showTableBtn');
    if (showTableBtn) {
        showTableBtn.addEventListener('click', function() {
            const tableContainer = document.getElementById('tableContainer');
            
            if (tableContainer.style.display === 'none' || tableContainer.style.display === '') {
                tableContainer.style.display = 'block';
                this.textContent = 'Ocultar cargos e salários';
            } else {
                tableContainer.style.display = 'none';
                this.textContent = 'Ver cargos e salários';
            }
        });
    }
}

function converter() {
    if (getCurrentPage() !== 'ti') return;
    
    let numero = document.getElementById("numero").value;
    
    if(numero === "" || isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, digite um número válido!";
        return;
    }
    
    numero = parseInt(numero);
    let binario = numero.toString(2);
    
    document.getElementById("resultado").innerHTML = 
        "Decimal: " + numero + "<br>" +
        "Binário: " + binario;
}

window.converter = converter;

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = getCurrentPage();
    
    if (currentPage === 'rh') {
        const tableContainer = document.getElementById('tableContainer');
        if (tableContainer) {
            tableContainer.style.display = 'none';
        }
    }
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPagamento");
    const msg = document.getElementById("sucessoMsg");
  
    form.onsubmit = (e) => {
      e.preventDefault();
  
      // 🔐 Aqui você pode adicionar validação real dos campos
      const campos = form.querySelectorAll("input");
      let vazio = false;
  
      campos.forEach((campo) => {
        if (campo.value.trim() === "") {
          vazio = true;
          campo.style.border = "2px solid red";
        } else {
          campo.style.border = "1px solid #ccc";
        }
      });
  
      if (vazio) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      // 💸 Simulação do pagamento
      msg.style.display = "block";
      msg.textContent = "✅ Pagamento realizado com sucesso!";
    };
  });
  
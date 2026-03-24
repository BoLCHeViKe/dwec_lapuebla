// Funciones auxiliares
export function getValue(id) {
  const el = document.getElementById(id);
  if (el.type === 'checkbox') return el.checked;
  return el.value.trim();
}

export function showError(id, msg) {
  document.getElementById(id).classList.add('error');
  document.getElementById('error-' + id).textContent = msg;
}

export function clearError(id) {
  document.getElementById(id).classList.remove('error');
  document.getElementById('error-' + id).textContent = '';
}


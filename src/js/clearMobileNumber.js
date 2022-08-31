export default function clearMobileNumber(tel) {
  const phone = tel.replace(/\D/g, '');
  if (phone.length === 11) {
    return `+${tel.replace(/^8/, '7').replace(/\D/g, '')}`;
  }
  return `+${phone}`;
}

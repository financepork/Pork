import Swal from "sweetalert2"

const ErrorMessage = (errorMessage, errorText) => {
  return (
    Swal.fire({
          title: 'Ocorreu um Erro',
          text: errorText,
          icon: 'error',
          color: 'var(--color-red)',
          background: 'var(--color-white)',
          footer: errorMessage || String(error),
          customClass: {
            popup: '!rounded-2xl !p-6 !shadow-xl',
            confirmButton: '!text-white-500 !bg-red-500 !border-white  '
          }
        })
  )
}

export default ErrorMessage
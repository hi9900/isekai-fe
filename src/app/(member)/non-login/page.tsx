import NonBottom from '@/containers/non-login/NonBottom'
import NonLoginForm from '@/containers/non-login/NonLoginForm'

export default function Page() {
  return (
    <main className="text-[#666] px-[30px] py-5">
      <NonLoginForm />
      <NonBottom />
    </main>
  )
}

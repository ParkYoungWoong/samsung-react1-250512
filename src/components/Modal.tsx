import { useNavigate } from 'react-router'

export default function Modal({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center">
      <div
        className="absolute top-0 left-0 h-full w-full bg-black/70"
        onClick={() => navigate('/movies')}></div>
      <div className="relative h-[90%] max-h-[90%] w-[600px] overflow-y-auto rounded-md bg-white">
        {children}
      </div>
    </div>
  )
}

{
  /* <Modal>
  <h1>모달이지롱~~</h1>
  <div>모달 내용</div>
</Modal> */
}

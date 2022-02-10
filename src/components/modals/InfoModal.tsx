import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Как играть" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Угадай слово с 6 попыток. После каждого предположения цвет плитки будет
         измените, чтобы показать, насколько ваша догадка была близка к слову.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="А" status="correct" />
        <Cell value="К" />
        <Cell value="У" />
        <Cell value="Л" />
        <Cell value="А" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Буква А в слове и на правильном месте.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="А" />
        <Cell value="Б" />
        <Cell value="Б" />
        <Cell value="А" />
        <Cell value="Т" status="present"/>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Буква Т в слове есть, но не на том месте.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="А" />
        <Cell value="М" status="absent"/>
        <Cell value="Б" />
        <Cell value="А" />
        <Cell value="Р" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Буква М нет в слове ни в одном месте.
      </p>
    </BaseModal>
  )
}

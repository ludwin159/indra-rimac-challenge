import { ICheckbox } from '../../components'

const Checkbox = ({isActive, setIsActive, children}: ICheckbox) => {
  
  return (
    <div className="Checkbox">
      <div>
        <div
          className={`Checkbox__item ${isActive && 'Checkbox__item--active'}`}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive &&
            <svg
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3178 0.927476C10.634 1.19503 10.6734 1.66827 10.4059 1.98447L4.90588 8.48447C4.76799 8.64743 4.56719 8.74391 4.3538 8.74974C4.14041 8.75556 3.93465 8.67018 3.78808 8.51498L0.954742 5.51498C0.670333 5.21384 0.683896 4.73916 0.985034 4.45476C1.28617 4.17035 1.76085 4.18391 2.04526 4.48505L4.30263 6.87521L9.2608 1.01556C9.52835 0.699354 10.0016 0.659918 10.3178 0.927476Z"
                fill="white"
              />
            </svg>
          }
        </div>
      </div>
      <p className='Checkbox__info'>{children}</p>
    </div>
  )
}

export default Checkbox

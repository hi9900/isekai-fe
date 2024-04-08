'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import style from '@/components/Join/join.module.css'
import BirthInput from './BirthInput'
import FindBtn from './FindBtn'
import JoinBtn from './JoinBtn'
import NameInput from './NameInput'
import PhoneInput from './PhoneInput'

export default function AuthInput() {
  const pathname = usePathname()
  const [alert, setAlert] = useRecoilState(AlertState)

  const [payload, setPayload] = useState({
    name: '',
    gender_male: false,
    gender_female: false,
    birth: '',
    nation: '',
    phoneNum: '',
  })

  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }

  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  const isValid = () => {
    if (!payload.name) {
      return showAlert('이름을 입력해주세요.')
    }
    if (!payload.gender_male && !payload.gender_female) {
      return showAlert('성별을 선택해주세요.')
    }
    if (!payload.birth || payload.birth.length !== 8) {
      return showAlert('생년월일 8자리를 정확하게 입력해주세요.\n예) 20100101')
    }

    const regex = /^[0-9]*$/
    if (!payload.phoneNum || !regex.test(payload.phoneNum)) {
      return showAlert('휴대폰번호를 정확히 입력해주세요.')
    }
    if (payload.phoneNum.substring(0, 3) === '010') {
      if (payload.phoneNum.substring(3).length !== 8) {
        return showAlert('휴대폰번호를 정확히 입력해주세요.')
      }
    } else if (
      payload.phoneNum.substring(0, 3) ===
      ('011' || '016' || '017' || '018' || '019')
    ) {
      if (
        payload.phoneNum.substring(3).length < 7 ||
        payload.phoneNum.substring(3).length > 8
      ) {
        return showAlert('휴대폰번호를 정확히 입력해주세요.')
      }
    } else {
      return showAlert('휴대폰번호를 정확히 입력해주세요.')
    }

    return true
  }

  return (
    <div className={style.m_auth_section}>
      <div className={style.auth_bx}>
        <NameInput
          setPayload={setPayload}
          male={payload.gender_male}
          female={payload.gender_female}
        />
        <BirthInput setPayload={setPayload} />
        <PhoneInput setPayload={setPayload} />
        {pathname === '/join-auth' ? (
          <JoinBtn payload={payload} isValid={isValid} />
        ) : (
          <FindBtn payload={payload} isValid={isValid} />
        )}
      </div>
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </div>
  )
}
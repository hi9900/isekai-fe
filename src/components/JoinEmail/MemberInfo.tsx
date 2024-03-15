/* eslint-disable jsx-a11y/label-has-associated-control */
import style from '@/components/join.module.css'
import CheckCert from './CheckCert'

export default function MemberInfo() {
  const EmailId = 'Hi'

  return (
    <>
      <div className={style.cmem_card_tit}>
        <h3>회원정보</h3>
      </div>
      <div className={style.cmem_cont}>
        <div className={`${style.cmem_row} ${style.info}`}>
          <dl className={style.cmem_ip}>
            <dt>
              <span className={style.cmem_require}>
                <span className={style.star} aria-hidden="true">
                  *
                </span>
                <label>
                  <span className={style.blind}>필수입력</span>
                </label>
              </span>
              아이디
            </dt>
            <dd>
              <div className={style.cmem_inpbtn_set}>
                <span className={style.cmem_inp_txt}>
                  <input
                    type="text"
                    maxLength={50}
                    placeholder="이메일주소 입력"
                  />
                </span>
                <button
                  type="button"
                  className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
                >
                  중복확인
                </button>
                <input type="hidden" value={EmailId} />
              </div>
            </dd>
          </dl>
        </div>
        <div className={style.cmem_row}>
          <dl className={style.cmem_ip}>
            <dt>
              <span className={style.cmem_require}>
                <span className={style.star} aria-hidden="true">
                  *
                </span>
                <label>
                  <span className={style.blind}>필수입력</span>
                </label>
              </span>
              비밀번호
            </dt>
            <dd>
              {/* 입력 중일 때, .cmem_inp_txt에 writing 클래스 추가, 그 외에는 해당 클래스 제거 */}
              {/* 입력완료 시 .cmem_inp_txt에 .ok 클래스 추가, 그 외에는 해당 클래스 제거 */}
              <div className={style.cmem_inp_txt}>
                <input type="text" placeholder="영문, 숫자 조합 8~20자리" />
                {/* <button type="button" className={style.inp_clear}>
                  <span className={style.cmem_ico_clear}>
                    <span className={style.blind}>입력내용 삭제</span>
                  </span>
                </button>
                <span className={style.cmem_ico_ok} /> */}
              </div>
              <div className={style.cmem_inp_txt}>
                <input type="text" placeholder="비밀번호 재확인" />
                {/* <button type="button" className={style.inp_clear}>
                  <span className={style.cmem_ico_clear}>
                    <span className={style.blind}>입력내용 삭제</span>
                  </span>
                </button>
                <span className={style.cmem_ico_ok} /> */}
              </div>
            </dd>
          </dl>
        </div>
        <div className={style.cmem_row}>
          <dl className={style.cmem_ip}>
            <dt>
              <span className={style.cmem_require}>
                <span className={style.star} aria-hidden="true">
                  *
                </span>
                <label>
                  <span className={style.blind}>필수입력</span>
                </label>
              </span>
              이름
            </dt>
            <dd>
              <div className={style.cmem_inp_txt}>
                <input type="text" />
              </div>
            </dd>
          </dl>
        </div>
        <div className={style.cmem_row}>
          <div className={style.cmem_user_phone}>
            <dl className={style.cmem_ip}>
              <dt>
                <span className={style.cmem_require}>
                  <span className={style.star} aria-hidden="true">
                    *
                  </span>
                  <label>
                    <span className={style.blind}>필수입력</span>
                  </label>
                </span>
                휴대폰 번호
              </dt>
              <dd>
                <div className={style.phone_num}>
                  <div className={style.cmem_inp_grp}>
                    <span className={`${style.cmem_inp_sel} ${style.v2}`}>
                      <select
                        id="mbrCntsano"
                        name="mbrCntsMobileDto.mbrCntsano"
                        title="휴대폰 번호 앞자리"
                      >
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                      <span className={style.sel_arr} />
                    </span>
                    <span className={style.space} />
                    <span className={style.cmem_inp_txt}>
                      <input
                        type="tel"
                        id="mobileNoStr"
                        title="휴대폰 번호 뒷자리"
                        placeholder="휴대폰 뒷자리"
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    id="btnReqOtp"
                    type="button"
                    className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
                  >
                    {/* 인증번호 로직 */}
                    인증번호 발송
                  </button>
                </div>
                {/* 인증번호 발송 버튼 눌러야 나오도록 구현 */}
                <CheckCert />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

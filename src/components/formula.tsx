import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import '@/style/components/formula.css'


interface FormulaState {
  fee: number
  passengers: number
  collected: number
  change: number
}

export default function Formula() {
  const [{
    fee,
    collected,
    passengers,
    change
  }, setFormula] = useState<FormulaState>({
    fee: 0,
    passengers: 0,
    collected: 0,
    change: 0
  })

  useEffect(() => {
    const totalFee = fee * passengers
    const theChange = (totalFee - collected) * -1

    setFormula(state => ({
      ...state,
      change: theChange
    }))
  }, [fee, passengers, change, collected])
  return (
    <section className='formula'>
      <section className="block-input">
        <div className='input-field'>
          <Label className='text-xl' htmlFor="fee">Fee per Passenger</Label>
          <input
            className='input-number'
            id='fee'
            type='tel'
            value={fee}
            pattern="[0-9]{0,}"
            onChange={e => setFormula(state => {
              const result = parseInt(e.target.value)
              return {
                ...state,
                fee: isNaN(result) ? 0 : result
              }
            })} />
        </div>
        <div className='input-field'>
          <Label className='text-xl' htmlFor="passengers">Num of Passengers</Label>
          <input
            className='input-number'
            id='passengers'
            type='tel'
            value={passengers}
            pattern="[0-9]{0,}"
            onChange={e => setFormula(state => {
              const result = parseInt(e.target.value)
              return {
                ...state,
                passengers: isNaN(result) ? 0 : result
              }
            })} />
        </div>
      </section>
      <section className="block-input">
        <div className='input-field'>
          <Label className='text-xl' htmlFor="collected">Collected</Label>
          <input
            className='input-number'
            id='collected'
            type='tel'
            value={collected}
            pattern="[0-9]{0,}"
            onChange={e => setFormula(state => {
              const result = parseInt(e.target.value)
              return {
                ...state,
                collected: isNaN(result) ? 0 : result
              }
            })} />
        </div>
        <div className='input-field'>
          <Label className='text-xl' htmlFor="change">Change</Label>
          <div id='change' className='change-container'>
            <span className='change'>
              {change}
            </span>
          </div>
        </div>
      </section>
    </section>
  )
}

import React, {useId} from 'react'
import CurrencySelect from './CurrencySelect';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd", 
    currencyDisable = false,
    amountDisable = false,
    className = "",
}) {

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <CurrencySelect
                    selectedCurrency={selectedCurrency}
                    onCurrencyChange={onCurrencyChange}
                    currencyDisable={currencyDisable}
                    currencyOptions={currencyOptions}
                />
                
            </div>
        </div>
    );
}

export default InputBox;


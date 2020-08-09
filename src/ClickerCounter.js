import React from 'react'

export default function ClickerCounter({number}) {
    if (number > 4) {
    return <div>Counter: {number} Очень много</div>
    }
    if (number > 0) {
        return <div>Counter: {number} Много </div>
        }
    return <div>Counter: нажми</div>
}

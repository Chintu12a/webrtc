import React, { useState } from 'react'
import Button from '../../../../components/Button/Button'
import Card from '../../../../components/Card/Card'
import TextInput from '../../../../components/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css';

const Phone = ({onClick}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <Card title="Enter your phone number" icon="phone">
            <TextInput value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={onClick} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    )
}

export default Phone

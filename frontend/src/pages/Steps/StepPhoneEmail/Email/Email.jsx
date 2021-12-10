import React, { useState } from 'react'
import Button from '../../../../components/Button/Button'
import Card from '../../../../components/Card/Card'
import TextInput from '../../../../components/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css';

const Email = ({onClick}) => {
    const [email, setEmail] = useState('');
    return (
        <Card title="Enter your email id" icon="email-emoji">
            <TextInput value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <div>
            <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={onClick} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your email, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    )
}

export default Email

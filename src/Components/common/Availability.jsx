import React from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../libs/supabaseClient';
import './Availability.css';

const Availability = ({ showDetails = true }) => {
    const { t } = useTranslation();
    const [status, setStatus] = React.useState('loading');
    const [note, setNote] = React.useState('');

    React.useEffect(() => {
        let mounted = true;

        const load = async () => {
            try {
                const { data, error } = await supabase
                    .from('availability')
                    .select('status, note')
                    .limit(1)
                    .maybeSingle();

                if (mounted) {
                    if (!error && data) {
                        setStatus(data.status);
                        setNote(data.note || '');
                    } else {
                        setStatus('open');
                        setNote('');
                    }
                }
            } catch (err) {
                if (mounted) {
                    setStatus('open');
                    setNote('');
                }
            }
        };

        load();
        return () => {
            mounted = false;
        };
    }, []);

    if (status === 'loading') {
        return (
            <div className="availability availability--loading">
                <span className="availability__dot"></span>
                {t('availability.checking')}
            </div>
        );
    }

    const isOpen = status === 'open' || status === 'available';

    return (
        <div className={`availability ${isOpen ? 'availability--open' : 'availability--busy'}`}>
            <span className="availability__dot"></span>
            {isOpen ? t('availability.open') : t('availability.busy')}
            {showDetails && note && <p className="availability__note">{note}</p>}
        </div>
    );
};

export default Availability;

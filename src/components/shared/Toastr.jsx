import { motion, AnimatePresence } from 'framer-motion';
import PropTypes  from 'prop-types';

function Toastr({display, status}) {
    return (
        <AnimatePresence>
            <motion.div className={`toastr ${status === 'success' ? 'toastr-success' : 'toastr-fail'}`}
                        initial={{opacity: 0}}
                        animate ={{opacity: 1}}
                        exit={{opacity: 0}}
                        style={
                            {
                                display: display ? 'block' : 'none',
                            }
                        }
            >
                <div className="toastr-text">
                    <p>{status === 'success' ? 'The request was successfull' : 'The request has failed'}</p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

Toastr.defaultProps = {
    display: false,
    status: 'success',
}

Toastr.propTypes = {
    display: PropTypes.bool,
    status: PropTypes.string,
}

export default Toastr;
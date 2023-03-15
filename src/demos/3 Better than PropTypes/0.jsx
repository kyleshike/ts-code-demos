import { useMemo } from "react";
import PropTypes from "prop-types";

export default function Alert({ isError = false, message }) {
  const { className, iconSrc } = useMemo(() => {
    if (isError) {
      return { className: "error", iconSrc: "error.png" };
    }

    return { className: "success", iconSrc: "success.png" };
  }, [isError]);

  return (
    <div className={className}>
      <img alt="" src={iconSrc} />
      <p>{message}</p>
    </div>
  );
}

AlertBasic.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.boolean,
};

AlertBasic.defaultProps = {
  isError: false,
};

export function App() {
  return (
    <>
      <Alert message="success message" />
      <Alert isError message="error message" />
    </>
  );
}

// const AlertType = {
//   error: "error",
//   info: "info",
//   success: "success",
//   warning: "warning",
// };

// export default function Alert({ type, message }) {
//   const { className, iconSrc } = useMemo(() => {
//     switch (type) {
//       case AlertType.error:
//         return { className: "error", iconSrc: "error.png" };
//       case AlertType.info:
//         return { className: "info", iconSrc: "info.png" };
//       case AlertType.success:
//         return { className: "success", iconSrc: "success.png" };
//       case AlertType.warning:
//         return { className: "warning", iconSrc: "warning.png" };
//       default:
//         throw new Error(`unsupported type provided to Alert: ${type}`);
//     }
//   }, [type]);

//   return (
//     <div className={className}>
//       <Image alt="" src={iconSrc} />
//       <p>{message}</p>
//     </div>
//   );
// }

// AlertRefactored.propTypes = {
//   type: PropTypes.oneOf(Object.values(AlertType)).isRequired,
//   message: PropTypes.string.isRequired,
// };

// export function App() {
//   return (
//     <>
//       <Alert message="success message" />
//       <Alert isError message="error message" />
//     </>
//   );
// }

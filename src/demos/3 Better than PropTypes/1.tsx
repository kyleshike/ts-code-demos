import { useMemo } from "react";

interface AlertProps {
  isError?: boolean;
  message: string;
}

function Alert({ isError, message }: AlertProps) {
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

export function App() {
  return (
    <>
      <Alert message="success message" />
      <Alert isError message="error message" />
    </>
  );
}

// enum AlertType {
//   error = "error",
//   info = "info",
//   success = "success",
//   warning = "warning",
// }

// interface AlertProps {
//   type: AlertType;
//   message: string;
// }

// export default function Alert({ type, message }: AlertProps) {
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
//     }
//   }, [type]);

//   return (
//     <div className={className}>
//       <Image alt="" src={iconSrc} />
//       <p>{message}</p>
//     </div>
//   );
// }

// export function App() {
//   return (
//     <>
//       <Alert message="success message" />
//       <Alert isError message="error message" />
//     </>
//   );
// }

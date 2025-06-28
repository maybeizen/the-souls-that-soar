import React, { memo } from "react";

export default memo(function Icon({ icon, className = "" }) {
  return <i className={`fa-solid fa-${icon} ${className}`} />;
});

export function IconOutline({ icon, className = "" }) {
  return <i className={`fa-regular fa-${icon} ${className}`} />;
}

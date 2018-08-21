declare module "react-native-set-soft-input-mode" {
  const SoftInputMode: {
    set: (value: number) => void;
    ADJUST_NOTHING: number;
    ADJUST_PAN: number;
    ADJUST_RESIZE: number;
    ADJUST_UNSPECIFIED: number;
  };
  export default SoftInputMode;
}

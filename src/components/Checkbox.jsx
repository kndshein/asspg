export default function Checkbox({
  value,
  name,
  desc,
  price,
  long_desc,
  handleOnClick,
  disabled,
  example,
  is_round,
}) {
  const colorConfig = {
    isReverseOptimized: {
      border: 'border-rose-400',
      borderHover: 'hover:border-rose-400',
      gradient: 'from-fuchsia-400 to-rose-400',
      textColor: 'text-rose-500',
    },
    isDictOptimized: {
      border: 'border-sky-400',
      borderHover: 'hover:border-sky-400',
      gradient: 'from-sky-400 to-indigo-400',
      textColor: 'text-sky-500',
    },
    isBothOptimized: {
      border: 'border-violet-400',
      borderHover: 'hover:border-violet-400',
      gradient: 'from-fuchsia-400 to-violet-400',
      textColor: 'text-violet-500',
    },
    isUppercased: {
      border: 'border-yellow-400',
      borderHover: 'hover:border-yellow-400',
      gradient: 'from-yellow-400 to-orange-400',
      textColor: 'text-yellow-500',
    },
    isLeeted: {
      border: 'border-emerald-400',
      borderHover: 'hover:border-emerald-400',
      gradient: 'from-lime-400 to-emerald-400',
      textColor: 'text-emerald-500',
    },
    isDoubled: {
      border: 'border-orange-400',
      borderHover: 'hover:border-orange-400',
      gradient: 'from-orange-400 to-red-400',
      textColor: 'text-orange-500',
    },
    isPowered: {
      border: 'border-fuchsia-400',
      borderHover: 'hover:border-fuchsia-400',
      gradient: 'from-fuchsia-400 to-pink-400',
      textColor: 'text-fuchsia-400',
    },
  };

  return (
    <section className="flex p-2 pb-3">
      <div
        className={`flex shrink-0 justify-center items-center mr-4 mt-1.5 w-14 h-14 border-4 ${
          is_round ? 'rounded-full' : 'rounded-xl'
        } transition ease-in-out ${
          disabled
            ? 'border-zinc-700'
            : `border-gray-600 ${colorConfig[name].borderHover}`
        }`}
      >
        <button
          className={`h-10 w-10 p-3 m-1 ${
            is_round ? 'rounded-full' : 'rounded-md'
          } transition ease-in-out ${
            disabled
              ? 'bg-zinc-700'
              : `${value && `bg-gradient-to-r ${colorConfig[name].gradient}`} ${
                  value ? 'active:scale-90' : 'active:scale-125'
                } hover:bg-gray-700`
          }`}
          onClick={() => handleOnClick(name)}
          disabled={disabled}
        />
      </div>
      <section className="flex flex-col">
        <p
          className={`font-bold text-lg flex items-center flex-wrap ${
            disabled
              ? 'text-zinc-600'
              : `${value ? `${colorConfig[name].textColor}` : 'text-gray-200'}`
          }`}
        >
          <span className="mr-2">{desc}</span>
          {price && (
            <span className="inline-block px-1.5 pb-0.5 rounded-md text-black text-sm text-base bg-gradient-to-r from-yellow-300 to-amber-500 reflection">
              {price}
            </span>
          )}
        </p>
        <p className={`${disabled ? 'text-zinc-600' : 'text-zinc-400'}`}>
          {long_desc}
        </p>
        {example && (
          <p className="text-gray-300 italic mt-0.5 break-all">
            Examples: {example}
          </p>
        )}
      </section>
    </section>
  );
}

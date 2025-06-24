import React, { useState, useEffect } from "react";

const spriteOptions = ["adventurer", "pixel-art", "miniavs"];

const SetAvatar = ({ onAvatarSelect, onClose }) => {
  const [avatars, setAvatars] = useState([]);
  const [selected, setSelected] = useState(null);
  const [sprite, setSprite] = useState(spriteOptions[0]);

  useEffect(() => {
    generateAvatars(sprite);
  }, [sprite]);

  const generateAvatars = (style) => {
    const newAvatars = Array.from({ length: 3 }, () => {
      const seed = "user" + Math.floor(Math.random() * 10000);
      return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;
    });
    setAvatars(newAvatars);
    setSelected(null);
  };

  const handleSetAvatar = () => {
    if (selected === null) {
      alert("Please select an avatar.");
      return;
    }
    onAvatarSelect(avatars[selected]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose an Avatar</h2>

      <select
        value={sprite}
        onChange={(e) => setSprite(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        {spriteOptions.map((s, i) => (
          <option key={i} value={s}>
            {s}
          </option>
        ))}
      </select>

      <div className="flex gap-4 mb-4">
        {avatars.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`avatar-${i}`}
            onClick={() => setSelected(i)}
            className={`w-24 h-24 cursor-pointer rounded border-2 ${
              selected === i ? "border-blue-500" : "border-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
          Cancel
        </button>
        <button
          onClick={handleSetAvatar}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Set Avatar
        </button>
      </div>
    </div>
  );
};

export default SetAvatar;

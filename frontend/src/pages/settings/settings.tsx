import React, { FC } from "react";

const Settings: FC = () => {
  return (
    <main>
      <section>
        <div>Timers</div>
        <div>
          <div>reset current timer</div>
          <div>reset global timer</div>
        </div>
      </section>

      <section>
        <button>end detox/limit</button>
      </section>

      <section>
        <button>Reset infos</button>
      </section>

      <section>
        <div>blocked apps</div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </section>

      <section>
        <button>reset notifications</button>
        <label htmlFor="">disable / able notifications reminder</label>
        <input type="checkbox" name="" id="" />

        <label htmlFor="">disable / able notifications with progressing</label>
        <input type="checkbox" name="" id="" />
      </section>
    </main>
  );
};

export default Settings;

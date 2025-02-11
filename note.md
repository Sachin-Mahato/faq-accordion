```jsx

    <div className=" px-4">
      <h1 className=" font-fw-700 text-3xl uppercase text-center">faq</h1>
      <article className=" border-b-[1px] border-solid border-light-grayish-blue px-4">
        <div className="flex justify-center items-center gap-4 capitalize">
          <h2 className=" text-very-dark-grayish-blue">How many team members can I invite?</h2>
          <img
            src={img1}
            alt="icon-arrow-down"
            className=" w-2 h-2"
            onClick={toggleText}
          />
        </div>
        {text && (
          <p>
            The current limit for inviting team members on our Platform is up to
            10 individuals.
          </p>
        )}
      </article>
      <article>
        <div className="flex justify-center items-center gap-4 capitalize">
          <h2 className=" text-very-dark-grayish-blue">what is the maximum file upload size?</h2>
          <img
            src={img1}
            alt="icon-arrow-down"
            className=" w-2 h-2"
            onClick={toggleText}
          />
        </div>
        {text && (
          <p>
            no more than 2GB. all files in your account must fit your allotted
            storage space.
          </p>
        )}
      </article>
      <article>
        <div className="flex justify-center items-center gap-4 capitalize">
          <h2 className=" text-very-dark-grayish-blue">how do i reset my password?</h2>
          <img
            src={img1}
            alt="icon-arrow-down"
            className=" w-2 h-2"
            onClick={toggleText}
          />
        </div>
        {text && (
          <p>
            Reset your password: Click Forgot Password enter your email, follow
            the email instructions, and set a new password.
          </p>
        )}
      </article>
      <article>
        <div className="flex justify-center items-center gap-4 capitalize">
          <h2 className=" text-very-dark-grayish-blue">can i cancel my subscription?</h2>
          <img
            src={img1}
            alt="icon-arrow-down"
            className=" w-2 h-2"
            onClick={toggleText}
          />
        </div>
        {text && (
          <p>Yeah, just click the Cancel Subscription button – easy peasy!.</p>
        )}
      </article>
      <article>
        <div className="flex justify-center items-center gap-4 capitalize">
          <h2 className=" text-very-dark-grayish-blue ${text? 'font-fw-700' : ''}`}>do you provide additional support?</h2>
          <img
            src={img1}
            alt="icon-arrow-down"
            className=" w-2 h-2"
            onClick={toggleText}
          />
        </div>
        {text && (
          <p>
            Yep, we have got your back! For extra help, hit us up through the
            support chat or drop an email.
          </p>
        )}

      </article>"
    </div>
```

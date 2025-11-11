
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model departements
 * 
 */
export type departements = $Result.DefaultSelection<Prisma.$departementsPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model privacy
 * 
 */
export type privacy = $Result.DefaultSelection<Prisma.$privacyPayload>
/**
 * Model staff
 * 
 */
export type staff = $Result.DefaultSelection<Prisma.$staffPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model mail
 * 
 */
export type mail = $Result.DefaultSelection<Prisma.$mailPayload>
/**
 * Model taches
 * 
 */
export type taches = $Result.DefaultSelection<Prisma.$tachesPayload>
/**
 * Model stats_gender_mail_count
 * 
 */
export type stats_gender_mail_count = $Result.DefaultSelection<Prisma.$stats_gender_mail_countPayload>
/**
 * Model stat_mail_by_gender
 * 
 */
export type stat_mail_by_gender = $Result.DefaultSelection<Prisma.$stat_mail_by_genderPayload>
/**
 * Model stat_mail_by_priority
 * 
 */
export type stat_mail_by_priority = $Result.DefaultSelection<Prisma.$stat_mail_by_priorityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StaffHierarchie: {
  Leader: 'Leader',
  N: 'N',
  Employe_Lambda: 'Employe_Lambda'
};

export type StaffHierarchie = (typeof StaffHierarchie)[keyof typeof StaffHierarchie]


export const Genre: {
  M: 'M',
  F: 'F',
  Autre: 'Autre'
};

export type Genre = (typeof Genre)[keyof typeof Genre]


export const GenderStat: {
  F: 'F',
  M: 'M',
  X: 'X',
  U: 'U'
};

export type GenderStat = (typeof GenderStat)[keyof typeof GenderStat]


export const UserRole: {
  admin: 'admin',
  agent: 'agent'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const MailStatut: {
  Nouveau: 'Nouveau',
  Assigne: 'Assigne',
  Resolu: 'Resolu'
};

export type MailStatut = (typeof MailStatut)[keyof typeof MailStatut]


export const MailPriorite: {
  Alerte_Rouge: 'Alerte_Rouge',
  Urgent: 'Urgent',
  Normale: 'Normale'
};

export type MailPriorite = (typeof MailPriorite)[keyof typeof MailPriorite]

}

export type StaffHierarchie = $Enums.StaffHierarchie

export const StaffHierarchie: typeof $Enums.StaffHierarchie

export type Genre = $Enums.Genre

export const Genre: typeof $Enums.Genre

export type GenderStat = $Enums.GenderStat

export const GenderStat: typeof $Enums.GenderStat

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type MailStatut = $Enums.MailStatut

export const MailStatut: typeof $Enums.MailStatut

export type MailPriorite = $Enums.MailPriorite

export const MailPriorite: typeof $Enums.MailPriorite

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Departements
 * const departements = await prisma.departements.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Departements
   * const departements = await prisma.departements.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.departements`: Exposes CRUD operations for the **departements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departements
    * const departements = await prisma.departements.findMany()
    * ```
    */
  get departements(): Prisma.departementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privacy`: Exposes CRUD operations for the **privacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Privacies
    * const privacies = await prisma.privacy.findMany()
    * ```
    */
  get privacy(): Prisma.privacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mail`: Exposes CRUD operations for the **mail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mail
    * const mail = await prisma.mail.findMany()
    * ```
    */
  get mail(): Prisma.mailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taches`: Exposes CRUD operations for the **taches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taches
    * const taches = await prisma.taches.findMany()
    * ```
    */
  get taches(): Prisma.tachesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stats_gender_mail_count`: Exposes CRUD operations for the **stats_gender_mail_count** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats_gender_mail_counts
    * const stats_gender_mail_counts = await prisma.stats_gender_mail_count.findMany()
    * ```
    */
  get stats_gender_mail_count(): Prisma.stats_gender_mail_countDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stat_mail_by_gender`: Exposes CRUD operations for the **stat_mail_by_gender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stat_mail_by_genders
    * const stat_mail_by_genders = await prisma.stat_mail_by_gender.findMany()
    * ```
    */
  get stat_mail_by_gender(): Prisma.stat_mail_by_genderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stat_mail_by_priority`: Exposes CRUD operations for the **stat_mail_by_priority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stat_mail_by_priorities
    * const stat_mail_by_priorities = await prisma.stat_mail_by_priority.findMany()
    * ```
    */
  get stat_mail_by_priority(): Prisma.stat_mail_by_priorityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    departements: 'departements',
    category: 'category',
    privacy: 'privacy',
    staff: 'staff',
    users: 'users',
    mail: 'mail',
    taches: 'taches',
    stats_gender_mail_count: 'stats_gender_mail_count',
    stat_mail_by_gender: 'stat_mail_by_gender',
    stat_mail_by_priority: 'stat_mail_by_priority'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "departements" | "category" | "privacy" | "staff" | "users" | "mail" | "taches" | "stats_gender_mail_count" | "stat_mail_by_gender" | "stat_mail_by_priority"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      departements: {
        payload: Prisma.$departementsPayload<ExtArgs>
        fields: Prisma.departementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departementsPayload>
          }
          findFirst: {
            args: Prisma.departementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departementsPayload>
          }
          findMany: {
            args: Prisma.departementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departementsPayload>[]
          }
          create: {
            args: Prisma.departementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departementsPayload>
          }
          createMany: {
            args: Prisma.departementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.departementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departementsPayload>
          }
          update: {
            args: Prisma.departementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departementsPayload>
          }
          deleteMany: {
            args: Prisma.departementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.departementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departementsPayload>
          }
          aggregate: {
            args: Prisma.DepartementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartements>
          }
          groupBy: {
            args: Prisma.departementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.departementsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartementsCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      privacy: {
        payload: Prisma.$privacyPayload<ExtArgs>
        fields: Prisma.privacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.privacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.privacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          findFirst: {
            args: Prisma.privacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.privacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          findMany: {
            args: Prisma.privacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>[]
          }
          create: {
            args: Prisma.privacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          createMany: {
            args: Prisma.privacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.privacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          update: {
            args: Prisma.privacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          deleteMany: {
            args: Prisma.privacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.privacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.privacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$privacyPayload>
          }
          aggregate: {
            args: Prisma.PrivacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivacy>
          }
          groupBy: {
            args: Prisma.privacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.privacyCountArgs<ExtArgs>
            result: $Utils.Optional<PrivacyCountAggregateOutputType> | number
          }
        }
      }
      staff: {
        payload: Prisma.$staffPayload<ExtArgs>
        fields: Prisma.staffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findFirst: {
            args: Prisma.staffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findMany: {
            args: Prisma.staffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          create: {
            args: Prisma.staffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          createMany: {
            args: Prisma.staffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.staffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          update: {
            args: Prisma.staffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          deleteMany: {
            args: Prisma.staffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.staffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.staffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      mail: {
        payload: Prisma.$mailPayload<ExtArgs>
        fields: Prisma.mailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailPayload>
          }
          findFirst: {
            args: Prisma.mailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailPayload>
          }
          findMany: {
            args: Prisma.mailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailPayload>[]
          }
          create: {
            args: Prisma.mailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailPayload>
          }
          createMany: {
            args: Prisma.mailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailPayload>
          }
          update: {
            args: Prisma.mailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailPayload>
          }
          deleteMany: {
            args: Prisma.mailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailPayload>
          }
          aggregate: {
            args: Prisma.MailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMail>
          }
          groupBy: {
            args: Prisma.mailGroupByArgs<ExtArgs>
            result: $Utils.Optional<MailGroupByOutputType>[]
          }
          count: {
            args: Prisma.mailCountArgs<ExtArgs>
            result: $Utils.Optional<MailCountAggregateOutputType> | number
          }
        }
      }
      taches: {
        payload: Prisma.$tachesPayload<ExtArgs>
        fields: Prisma.tachesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tachesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tachesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tachesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tachesPayload>
          }
          findFirst: {
            args: Prisma.tachesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tachesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tachesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tachesPayload>
          }
          findMany: {
            args: Prisma.tachesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tachesPayload>[]
          }
          create: {
            args: Prisma.tachesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tachesPayload>
          }
          createMany: {
            args: Prisma.tachesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tachesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tachesPayload>
          }
          update: {
            args: Prisma.tachesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tachesPayload>
          }
          deleteMany: {
            args: Prisma.tachesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tachesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tachesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tachesPayload>
          }
          aggregate: {
            args: Prisma.TachesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaches>
          }
          groupBy: {
            args: Prisma.tachesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TachesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tachesCountArgs<ExtArgs>
            result: $Utils.Optional<TachesCountAggregateOutputType> | number
          }
        }
      }
      stats_gender_mail_count: {
        payload: Prisma.$stats_gender_mail_countPayload<ExtArgs>
        fields: Prisma.stats_gender_mail_countFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stats_gender_mail_countFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stats_gender_mail_countPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stats_gender_mail_countFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stats_gender_mail_countPayload>
          }
          findFirst: {
            args: Prisma.stats_gender_mail_countFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stats_gender_mail_countPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stats_gender_mail_countFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stats_gender_mail_countPayload>
          }
          findMany: {
            args: Prisma.stats_gender_mail_countFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stats_gender_mail_countPayload>[]
          }
          create: {
            args: Prisma.stats_gender_mail_countCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stats_gender_mail_countPayload>
          }
          createMany: {
            args: Prisma.stats_gender_mail_countCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stats_gender_mail_countDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stats_gender_mail_countPayload>
          }
          update: {
            args: Prisma.stats_gender_mail_countUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stats_gender_mail_countPayload>
          }
          deleteMany: {
            args: Prisma.stats_gender_mail_countDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stats_gender_mail_countUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stats_gender_mail_countUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stats_gender_mail_countPayload>
          }
          aggregate: {
            args: Prisma.Stats_gender_mail_countAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStats_gender_mail_count>
          }
          groupBy: {
            args: Prisma.stats_gender_mail_countGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stats_gender_mail_countGroupByOutputType>[]
          }
          count: {
            args: Prisma.stats_gender_mail_countCountArgs<ExtArgs>
            result: $Utils.Optional<Stats_gender_mail_countCountAggregateOutputType> | number
          }
        }
      }
      stat_mail_by_gender: {
        payload: Prisma.$stat_mail_by_genderPayload<ExtArgs>
        fields: Prisma.stat_mail_by_genderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stat_mail_by_genderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_genderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stat_mail_by_genderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_genderPayload>
          }
          findFirst: {
            args: Prisma.stat_mail_by_genderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_genderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stat_mail_by_genderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_genderPayload>
          }
          findMany: {
            args: Prisma.stat_mail_by_genderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_genderPayload>[]
          }
          create: {
            args: Prisma.stat_mail_by_genderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_genderPayload>
          }
          createMany: {
            args: Prisma.stat_mail_by_genderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stat_mail_by_genderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_genderPayload>
          }
          update: {
            args: Prisma.stat_mail_by_genderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_genderPayload>
          }
          deleteMany: {
            args: Prisma.stat_mail_by_genderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stat_mail_by_genderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stat_mail_by_genderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_genderPayload>
          }
          aggregate: {
            args: Prisma.Stat_mail_by_genderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStat_mail_by_gender>
          }
          groupBy: {
            args: Prisma.stat_mail_by_genderGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stat_mail_by_genderGroupByOutputType>[]
          }
          count: {
            args: Prisma.stat_mail_by_genderCountArgs<ExtArgs>
            result: $Utils.Optional<Stat_mail_by_genderCountAggregateOutputType> | number
          }
        }
      }
      stat_mail_by_priority: {
        payload: Prisma.$stat_mail_by_priorityPayload<ExtArgs>
        fields: Prisma.stat_mail_by_priorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stat_mail_by_priorityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_priorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stat_mail_by_priorityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_priorityPayload>
          }
          findFirst: {
            args: Prisma.stat_mail_by_priorityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_priorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stat_mail_by_priorityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_priorityPayload>
          }
          findMany: {
            args: Prisma.stat_mail_by_priorityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_priorityPayload>[]
          }
          create: {
            args: Prisma.stat_mail_by_priorityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_priorityPayload>
          }
          createMany: {
            args: Prisma.stat_mail_by_priorityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stat_mail_by_priorityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_priorityPayload>
          }
          update: {
            args: Prisma.stat_mail_by_priorityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_priorityPayload>
          }
          deleteMany: {
            args: Prisma.stat_mail_by_priorityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stat_mail_by_priorityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stat_mail_by_priorityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_mail_by_priorityPayload>
          }
          aggregate: {
            args: Prisma.Stat_mail_by_priorityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStat_mail_by_priority>
          }
          groupBy: {
            args: Prisma.stat_mail_by_priorityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stat_mail_by_priorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.stat_mail_by_priorityCountArgs<ExtArgs>
            result: $Utils.Optional<Stat_mail_by_priorityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    departements?: departementsOmit
    category?: categoryOmit
    privacy?: privacyOmit
    staff?: staffOmit
    users?: usersOmit
    mail?: mailOmit
    taches?: tachesOmit
    stats_gender_mail_count?: stats_gender_mail_countOmit
    stat_mail_by_gender?: stat_mail_by_genderOmit
    stat_mail_by_priority?: stat_mail_by_priorityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepartementsCountOutputType
   */

  export type DepartementsCountOutputType = {
    staff: number
  }

  export type DepartementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | DepartementsCountOutputTypeCountStaffArgs
  }

  // Custom InputTypes
  /**
   * DepartementsCountOutputType without action
   */
  export type DepartementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartementsCountOutputType
     */
    select?: DepartementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartementsCountOutputType without action
   */
  export type DepartementsCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    mail: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mail?: boolean | CategoryCountOutputTypeCountMailArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mailWhereInput
  }


  /**
   * Count Type PrivacyCountOutputType
   */

  export type PrivacyCountOutputType = {
    mail: number
  }

  export type PrivacyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mail?: boolean | PrivacyCountOutputTypeCountMailArgs
  }

  // Custom InputTypes
  /**
   * PrivacyCountOutputType without action
   */
  export type PrivacyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivacyCountOutputType
     */
    select?: PrivacyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrivacyCountOutputType without action
   */
  export type PrivacyCountOutputTypeCountMailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mailWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    mail: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mail?: boolean | StaffCountOutputTypeCountMailArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountMailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mailWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    taches: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taches?: boolean | UsersCountOutputTypeCountTachesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tachesWhereInput
  }


  /**
   * Count Type MailCountOutputType
   */

  export type MailCountOutputType = {
    taches: number
  }

  export type MailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taches?: boolean | MailCountOutputTypeCountTachesArgs
  }

  // Custom InputTypes
  /**
   * MailCountOutputType without action
   */
  export type MailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailCountOutputType
     */
    select?: MailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MailCountOutputType without action
   */
  export type MailCountOutputTypeCountTachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tachesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model departements
   */

  export type AggregateDepartements = {
    _count: DepartementsCountAggregateOutputType | null
    _avg: DepartementsAvgAggregateOutputType | null
    _sum: DepartementsSumAggregateOutputType | null
    _min: DepartementsMinAggregateOutputType | null
    _max: DepartementsMaxAggregateOutputType | null
  }

  export type DepartementsAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartementsSumAggregateOutputType = {
    id: number | null
  }

  export type DepartementsMinAggregateOutputType = {
    id: number | null
    nom_departement: string | null
  }

  export type DepartementsMaxAggregateOutputType = {
    id: number | null
    nom_departement: string | null
  }

  export type DepartementsCountAggregateOutputType = {
    id: number
    nom_departement: number
    _all: number
  }


  export type DepartementsAvgAggregateInputType = {
    id?: true
  }

  export type DepartementsSumAggregateInputType = {
    id?: true
  }

  export type DepartementsMinAggregateInputType = {
    id?: true
    nom_departement?: true
  }

  export type DepartementsMaxAggregateInputType = {
    id?: true
    nom_departement?: true
  }

  export type DepartementsCountAggregateInputType = {
    id?: true
    nom_departement?: true
    _all?: true
  }

  export type DepartementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departements to aggregate.
     */
    where?: departementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departements to fetch.
     */
    orderBy?: departementsOrderByWithRelationInput | departementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departements
    **/
    _count?: true | DepartementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartementsMaxAggregateInputType
  }

  export type GetDepartementsAggregateType<T extends DepartementsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartements[P]>
      : GetScalarType<T[P], AggregateDepartements[P]>
  }




  export type departementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departementsWhereInput
    orderBy?: departementsOrderByWithAggregationInput | departementsOrderByWithAggregationInput[]
    by: DepartementsScalarFieldEnum[] | DepartementsScalarFieldEnum
    having?: departementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartementsCountAggregateInputType | true
    _avg?: DepartementsAvgAggregateInputType
    _sum?: DepartementsSumAggregateInputType
    _min?: DepartementsMinAggregateInputType
    _max?: DepartementsMaxAggregateInputType
  }

  export type DepartementsGroupByOutputType = {
    id: number
    nom_departement: string
    _count: DepartementsCountAggregateOutputType | null
    _avg: DepartementsAvgAggregateOutputType | null
    _sum: DepartementsSumAggregateOutputType | null
    _min: DepartementsMinAggregateOutputType | null
    _max: DepartementsMaxAggregateOutputType | null
  }

  type GetDepartementsGroupByPayload<T extends departementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartementsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartementsGroupByOutputType[P]>
        }
      >
    >


  export type departementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_departement?: boolean
    staff?: boolean | departements$staffArgs<ExtArgs>
    _count?: boolean | DepartementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departements"]>



  export type departementsSelectScalar = {
    id?: boolean
    nom_departement?: boolean
  }

  export type departementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom_departement", ExtArgs["result"]["departements"]>
  export type departementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | departements$staffArgs<ExtArgs>
    _count?: boolean | DepartementsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $departementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "departements"
    objects: {
      staff: Prisma.$staffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom_departement: string
    }, ExtArgs["result"]["departements"]>
    composites: {}
  }

  type departementsGetPayload<S extends boolean | null | undefined | departementsDefaultArgs> = $Result.GetResult<Prisma.$departementsPayload, S>

  type departementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartementsCountAggregateInputType | true
    }

  export interface departementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['departements'], meta: { name: 'departements' } }
    /**
     * Find zero or one Departements that matches the filter.
     * @param {departementsFindUniqueArgs} args - Arguments to find a Departements
     * @example
     * // Get one Departements
     * const departements = await prisma.departements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departementsFindUniqueArgs>(args: SelectSubset<T, departementsFindUniqueArgs<ExtArgs>>): Prisma__departementsClient<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departementsFindUniqueOrThrowArgs} args - Arguments to find a Departements
     * @example
     * // Get one Departements
     * const departements = await prisma.departements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departementsFindUniqueOrThrowArgs>(args: SelectSubset<T, departementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departementsClient<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departementsFindFirstArgs} args - Arguments to find a Departements
     * @example
     * // Get one Departements
     * const departements = await prisma.departements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departementsFindFirstArgs>(args?: SelectSubset<T, departementsFindFirstArgs<ExtArgs>>): Prisma__departementsClient<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departementsFindFirstOrThrowArgs} args - Arguments to find a Departements
     * @example
     * // Get one Departements
     * const departements = await prisma.departements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departementsFindFirstOrThrowArgs>(args?: SelectSubset<T, departementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__departementsClient<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departements
     * const departements = await prisma.departements.findMany()
     * 
     * // Get first 10 Departements
     * const departements = await prisma.departements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departementsWithIdOnly = await prisma.departements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends departementsFindManyArgs>(args?: SelectSubset<T, departementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departements.
     * @param {departementsCreateArgs} args - Arguments to create a Departements.
     * @example
     * // Create one Departements
     * const Departements = await prisma.departements.create({
     *   data: {
     *     // ... data to create a Departements
     *   }
     * })
     * 
     */
    create<T extends departementsCreateArgs>(args: SelectSubset<T, departementsCreateArgs<ExtArgs>>): Prisma__departementsClient<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departements.
     * @param {departementsCreateManyArgs} args - Arguments to create many Departements.
     * @example
     * // Create many Departements
     * const departements = await prisma.departements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departementsCreateManyArgs>(args?: SelectSubset<T, departementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departements.
     * @param {departementsDeleteArgs} args - Arguments to delete one Departements.
     * @example
     * // Delete one Departements
     * const Departements = await prisma.departements.delete({
     *   where: {
     *     // ... filter to delete one Departements
     *   }
     * })
     * 
     */
    delete<T extends departementsDeleteArgs>(args: SelectSubset<T, departementsDeleteArgs<ExtArgs>>): Prisma__departementsClient<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departements.
     * @param {departementsUpdateArgs} args - Arguments to update one Departements.
     * @example
     * // Update one Departements
     * const departements = await prisma.departements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departementsUpdateArgs>(args: SelectSubset<T, departementsUpdateArgs<ExtArgs>>): Prisma__departementsClient<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departements.
     * @param {departementsDeleteManyArgs} args - Arguments to filter Departements to delete.
     * @example
     * // Delete a few Departements
     * const { count } = await prisma.departements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departementsDeleteManyArgs>(args?: SelectSubset<T, departementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departements
     * const departements = await prisma.departements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departementsUpdateManyArgs>(args: SelectSubset<T, departementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departements.
     * @param {departementsUpsertArgs} args - Arguments to update or create a Departements.
     * @example
     * // Update or create a Departements
     * const departements = await prisma.departements.upsert({
     *   create: {
     *     // ... data to create a Departements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departements we want to update
     *   }
     * })
     */
    upsert<T extends departementsUpsertArgs>(args: SelectSubset<T, departementsUpsertArgs<ExtArgs>>): Prisma__departementsClient<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departementsCountArgs} args - Arguments to filter Departements to count.
     * @example
     * // Count the number of Departements
     * const count = await prisma.departements.count({
     *   where: {
     *     // ... the filter for the Departements we want to count
     *   }
     * })
    **/
    count<T extends departementsCountArgs>(
      args?: Subset<T, departementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartementsAggregateArgs>(args: Subset<T, DepartementsAggregateArgs>): Prisma.PrismaPromise<GetDepartementsAggregateType<T>>

    /**
     * Group by Departements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends departementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departementsGroupByArgs['orderBy'] }
        : { orderBy?: departementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, departementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the departements model
   */
  readonly fields: departementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for departements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends departements$staffArgs<ExtArgs> = {}>(args?: Subset<T, departements$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the departements model
   */
  interface departementsFieldRefs {
    readonly id: FieldRef<"departements", 'Int'>
    readonly nom_departement: FieldRef<"departements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * departements findUnique
   */
  export type departementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    /**
     * Filter, which departements to fetch.
     */
    where: departementsWhereUniqueInput
  }

  /**
   * departements findUniqueOrThrow
   */
  export type departementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    /**
     * Filter, which departements to fetch.
     */
    where: departementsWhereUniqueInput
  }

  /**
   * departements findFirst
   */
  export type departementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    /**
     * Filter, which departements to fetch.
     */
    where?: departementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departements to fetch.
     */
    orderBy?: departementsOrderByWithRelationInput | departementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departements.
     */
    cursor?: departementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departements.
     */
    distinct?: DepartementsScalarFieldEnum | DepartementsScalarFieldEnum[]
  }

  /**
   * departements findFirstOrThrow
   */
  export type departementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    /**
     * Filter, which departements to fetch.
     */
    where?: departementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departements to fetch.
     */
    orderBy?: departementsOrderByWithRelationInput | departementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departements.
     */
    cursor?: departementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departements.
     */
    distinct?: DepartementsScalarFieldEnum | DepartementsScalarFieldEnum[]
  }

  /**
   * departements findMany
   */
  export type departementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    /**
     * Filter, which departements to fetch.
     */
    where?: departementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departements to fetch.
     */
    orderBy?: departementsOrderByWithRelationInput | departementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departements.
     */
    cursor?: departementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departements.
     */
    skip?: number
    distinct?: DepartementsScalarFieldEnum | DepartementsScalarFieldEnum[]
  }

  /**
   * departements create
   */
  export type departementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    /**
     * The data needed to create a departements.
     */
    data: XOR<departementsCreateInput, departementsUncheckedCreateInput>
  }

  /**
   * departements createMany
   */
  export type departementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departements.
     */
    data: departementsCreateManyInput | departementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departements update
   */
  export type departementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    /**
     * The data needed to update a departements.
     */
    data: XOR<departementsUpdateInput, departementsUncheckedUpdateInput>
    /**
     * Choose, which departements to update.
     */
    where: departementsWhereUniqueInput
  }

  /**
   * departements updateMany
   */
  export type departementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departements.
     */
    data: XOR<departementsUpdateManyMutationInput, departementsUncheckedUpdateManyInput>
    /**
     * Filter which departements to update
     */
    where?: departementsWhereInput
    /**
     * Limit how many departements to update.
     */
    limit?: number
  }

  /**
   * departements upsert
   */
  export type departementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    /**
     * The filter to search for the departements to update in case it exists.
     */
    where: departementsWhereUniqueInput
    /**
     * In case the departements found by the `where` argument doesn't exist, create a new departements with this data.
     */
    create: XOR<departementsCreateInput, departementsUncheckedCreateInput>
    /**
     * In case the departements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departementsUpdateInput, departementsUncheckedUpdateInput>
  }

  /**
   * departements delete
   */
  export type departementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    /**
     * Filter which departements to delete.
     */
    where: departementsWhereUniqueInput
  }

  /**
   * departements deleteMany
   */
  export type departementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departements to delete
     */
    where?: departementsWhereInput
    /**
     * Limit how many departements to delete.
     */
    limit?: number
  }

  /**
   * departements.staff
   */
  export type departements$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    cursor?: staffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * departements without action
   */
  export type departementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    nom_categorie: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    nom_categorie: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    nom_categorie: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    nom_categorie?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    nom_categorie?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    nom_categorie?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    nom_categorie: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_categorie?: boolean
    mail?: boolean | category$mailArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type categorySelectScalar = {
    id?: boolean
    nom_categorie?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom_categorie", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mail?: boolean | category$mailArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      mail: Prisma.$mailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom_categorie: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mail<T extends category$mailArgs<ExtArgs> = {}>(args?: Subset<T, category$mailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly nom_categorie: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.mail
   */
  export type category$mailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    where?: mailWhereInput
    orderBy?: mailOrderByWithRelationInput | mailOrderByWithRelationInput[]
    cursor?: mailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MailScalarFieldEnum | MailScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model privacy
   */

  export type AggregatePrivacy = {
    _count: PrivacyCountAggregateOutputType | null
    _avg: PrivacyAvgAggregateOutputType | null
    _sum: PrivacySumAggregateOutputType | null
    _min: PrivacyMinAggregateOutputType | null
    _max: PrivacyMaxAggregateOutputType | null
  }

  export type PrivacyAvgAggregateOutputType = {
    id: number | null
  }

  export type PrivacySumAggregateOutputType = {
    id: number | null
  }

  export type PrivacyMinAggregateOutputType = {
    id: number | null
    niveau_confidentialite: string | null
  }

  export type PrivacyMaxAggregateOutputType = {
    id: number | null
    niveau_confidentialite: string | null
  }

  export type PrivacyCountAggregateOutputType = {
    id: number
    niveau_confidentialite: number
    _all: number
  }


  export type PrivacyAvgAggregateInputType = {
    id?: true
  }

  export type PrivacySumAggregateInputType = {
    id?: true
  }

  export type PrivacyMinAggregateInputType = {
    id?: true
    niveau_confidentialite?: true
  }

  export type PrivacyMaxAggregateInputType = {
    id?: true
    niveau_confidentialite?: true
  }

  export type PrivacyCountAggregateInputType = {
    id?: true
    niveau_confidentialite?: true
    _all?: true
  }

  export type PrivacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which privacy to aggregate.
     */
    where?: privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of privacies to fetch.
     */
    orderBy?: privacyOrderByWithRelationInput | privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned privacies
    **/
    _count?: true | PrivacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivacyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivacySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivacyMaxAggregateInputType
  }

  export type GetPrivacyAggregateType<T extends PrivacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivacy[P]>
      : GetScalarType<T[P], AggregatePrivacy[P]>
  }




  export type privacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: privacyWhereInput
    orderBy?: privacyOrderByWithAggregationInput | privacyOrderByWithAggregationInput[]
    by: PrivacyScalarFieldEnum[] | PrivacyScalarFieldEnum
    having?: privacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivacyCountAggregateInputType | true
    _avg?: PrivacyAvgAggregateInputType
    _sum?: PrivacySumAggregateInputType
    _min?: PrivacyMinAggregateInputType
    _max?: PrivacyMaxAggregateInputType
  }

  export type PrivacyGroupByOutputType = {
    id: number
    niveau_confidentialite: string
    _count: PrivacyCountAggregateOutputType | null
    _avg: PrivacyAvgAggregateOutputType | null
    _sum: PrivacySumAggregateOutputType | null
    _min: PrivacyMinAggregateOutputType | null
    _max: PrivacyMaxAggregateOutputType | null
  }

  type GetPrivacyGroupByPayload<T extends privacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivacyGroupByOutputType[P]>
            : GetScalarType<T[P], PrivacyGroupByOutputType[P]>
        }
      >
    >


  export type privacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    niveau_confidentialite?: boolean
    mail?: boolean | privacy$mailArgs<ExtArgs>
    _count?: boolean | PrivacyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privacy"]>



  export type privacySelectScalar = {
    id?: boolean
    niveau_confidentialite?: boolean
  }

  export type privacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "niveau_confidentialite", ExtArgs["result"]["privacy"]>
  export type privacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mail?: boolean | privacy$mailArgs<ExtArgs>
    _count?: boolean | PrivacyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $privacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "privacy"
    objects: {
      mail: Prisma.$mailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      niveau_confidentialite: string
    }, ExtArgs["result"]["privacy"]>
    composites: {}
  }

  type privacyGetPayload<S extends boolean | null | undefined | privacyDefaultArgs> = $Result.GetResult<Prisma.$privacyPayload, S>

  type privacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<privacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivacyCountAggregateInputType | true
    }

  export interface privacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['privacy'], meta: { name: 'privacy' } }
    /**
     * Find zero or one Privacy that matches the filter.
     * @param {privacyFindUniqueArgs} args - Arguments to find a Privacy
     * @example
     * // Get one Privacy
     * const privacy = await prisma.privacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends privacyFindUniqueArgs>(args: SelectSubset<T, privacyFindUniqueArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Privacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {privacyFindUniqueOrThrowArgs} args - Arguments to find a Privacy
     * @example
     * // Get one Privacy
     * const privacy = await prisma.privacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends privacyFindUniqueOrThrowArgs>(args: SelectSubset<T, privacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Privacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyFindFirstArgs} args - Arguments to find a Privacy
     * @example
     * // Get one Privacy
     * const privacy = await prisma.privacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends privacyFindFirstArgs>(args?: SelectSubset<T, privacyFindFirstArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Privacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyFindFirstOrThrowArgs} args - Arguments to find a Privacy
     * @example
     * // Get one Privacy
     * const privacy = await prisma.privacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends privacyFindFirstOrThrowArgs>(args?: SelectSubset<T, privacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Privacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Privacies
     * const privacies = await prisma.privacy.findMany()
     * 
     * // Get first 10 Privacies
     * const privacies = await prisma.privacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privacyWithIdOnly = await prisma.privacy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends privacyFindManyArgs>(args?: SelectSubset<T, privacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Privacy.
     * @param {privacyCreateArgs} args - Arguments to create a Privacy.
     * @example
     * // Create one Privacy
     * const Privacy = await prisma.privacy.create({
     *   data: {
     *     // ... data to create a Privacy
     *   }
     * })
     * 
     */
    create<T extends privacyCreateArgs>(args: SelectSubset<T, privacyCreateArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Privacies.
     * @param {privacyCreateManyArgs} args - Arguments to create many Privacies.
     * @example
     * // Create many Privacies
     * const privacy = await prisma.privacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends privacyCreateManyArgs>(args?: SelectSubset<T, privacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Privacy.
     * @param {privacyDeleteArgs} args - Arguments to delete one Privacy.
     * @example
     * // Delete one Privacy
     * const Privacy = await prisma.privacy.delete({
     *   where: {
     *     // ... filter to delete one Privacy
     *   }
     * })
     * 
     */
    delete<T extends privacyDeleteArgs>(args: SelectSubset<T, privacyDeleteArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Privacy.
     * @param {privacyUpdateArgs} args - Arguments to update one Privacy.
     * @example
     * // Update one Privacy
     * const privacy = await prisma.privacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends privacyUpdateArgs>(args: SelectSubset<T, privacyUpdateArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Privacies.
     * @param {privacyDeleteManyArgs} args - Arguments to filter Privacies to delete.
     * @example
     * // Delete a few Privacies
     * const { count } = await prisma.privacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends privacyDeleteManyArgs>(args?: SelectSubset<T, privacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Privacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Privacies
     * const privacy = await prisma.privacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends privacyUpdateManyArgs>(args: SelectSubset<T, privacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Privacy.
     * @param {privacyUpsertArgs} args - Arguments to update or create a Privacy.
     * @example
     * // Update or create a Privacy
     * const privacy = await prisma.privacy.upsert({
     *   create: {
     *     // ... data to create a Privacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Privacy we want to update
     *   }
     * })
     */
    upsert<T extends privacyUpsertArgs>(args: SelectSubset<T, privacyUpsertArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Privacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyCountArgs} args - Arguments to filter Privacies to count.
     * @example
     * // Count the number of Privacies
     * const count = await prisma.privacy.count({
     *   where: {
     *     // ... the filter for the Privacies we want to count
     *   }
     * })
    **/
    count<T extends privacyCountArgs>(
      args?: Subset<T, privacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Privacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrivacyAggregateArgs>(args: Subset<T, PrivacyAggregateArgs>): Prisma.PrismaPromise<GetPrivacyAggregateType<T>>

    /**
     * Group by Privacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {privacyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends privacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: privacyGroupByArgs['orderBy'] }
        : { orderBy?: privacyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, privacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the privacy model
   */
  readonly fields: privacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for privacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__privacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mail<T extends privacy$mailArgs<ExtArgs> = {}>(args?: Subset<T, privacy$mailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the privacy model
   */
  interface privacyFieldRefs {
    readonly id: FieldRef<"privacy", 'Int'>
    readonly niveau_confidentialite: FieldRef<"privacy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * privacy findUnique
   */
  export type privacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    /**
     * Filter, which privacy to fetch.
     */
    where: privacyWhereUniqueInput
  }

  /**
   * privacy findUniqueOrThrow
   */
  export type privacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    /**
     * Filter, which privacy to fetch.
     */
    where: privacyWhereUniqueInput
  }

  /**
   * privacy findFirst
   */
  export type privacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    /**
     * Filter, which privacy to fetch.
     */
    where?: privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of privacies to fetch.
     */
    orderBy?: privacyOrderByWithRelationInput | privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for privacies.
     */
    cursor?: privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of privacies.
     */
    distinct?: PrivacyScalarFieldEnum | PrivacyScalarFieldEnum[]
  }

  /**
   * privacy findFirstOrThrow
   */
  export type privacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    /**
     * Filter, which privacy to fetch.
     */
    where?: privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of privacies to fetch.
     */
    orderBy?: privacyOrderByWithRelationInput | privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for privacies.
     */
    cursor?: privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of privacies.
     */
    distinct?: PrivacyScalarFieldEnum | PrivacyScalarFieldEnum[]
  }

  /**
   * privacy findMany
   */
  export type privacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    /**
     * Filter, which privacies to fetch.
     */
    where?: privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of privacies to fetch.
     */
    orderBy?: privacyOrderByWithRelationInput | privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing privacies.
     */
    cursor?: privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` privacies.
     */
    skip?: number
    distinct?: PrivacyScalarFieldEnum | PrivacyScalarFieldEnum[]
  }

  /**
   * privacy create
   */
  export type privacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    /**
     * The data needed to create a privacy.
     */
    data: XOR<privacyCreateInput, privacyUncheckedCreateInput>
  }

  /**
   * privacy createMany
   */
  export type privacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many privacies.
     */
    data: privacyCreateManyInput | privacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * privacy update
   */
  export type privacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    /**
     * The data needed to update a privacy.
     */
    data: XOR<privacyUpdateInput, privacyUncheckedUpdateInput>
    /**
     * Choose, which privacy to update.
     */
    where: privacyWhereUniqueInput
  }

  /**
   * privacy updateMany
   */
  export type privacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update privacies.
     */
    data: XOR<privacyUpdateManyMutationInput, privacyUncheckedUpdateManyInput>
    /**
     * Filter which privacies to update
     */
    where?: privacyWhereInput
    /**
     * Limit how many privacies to update.
     */
    limit?: number
  }

  /**
   * privacy upsert
   */
  export type privacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    /**
     * The filter to search for the privacy to update in case it exists.
     */
    where: privacyWhereUniqueInput
    /**
     * In case the privacy found by the `where` argument doesn't exist, create a new privacy with this data.
     */
    create: XOR<privacyCreateInput, privacyUncheckedCreateInput>
    /**
     * In case the privacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<privacyUpdateInput, privacyUncheckedUpdateInput>
  }

  /**
   * privacy delete
   */
  export type privacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    /**
     * Filter which privacy to delete.
     */
    where: privacyWhereUniqueInput
  }

  /**
   * privacy deleteMany
   */
  export type privacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which privacies to delete
     */
    where?: privacyWhereInput
    /**
     * Limit how many privacies to delete.
     */
    limit?: number
  }

  /**
   * privacy.mail
   */
  export type privacy$mailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    where?: mailWhereInput
    orderBy?: mailOrderByWithRelationInput | mailOrderByWithRelationInput[]
    cursor?: mailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MailScalarFieldEnum | MailScalarFieldEnum[]
  }

  /**
   * privacy without action
   */
  export type privacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
  }


  /**
   * Model staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    id: number | null
    departement_id: number | null
    nombre_enfants: number | null
  }

  export type StaffSumAggregateOutputType = {
    id: number | null
    departement_id: number | null
    nombre_enfants: number | null
  }

  export type StaffMinAggregateOutputType = {
    id: number | null
    nom_complet: string | null
    adresse_mail: string | null
    statut_hierarchique: $Enums.StaffHierarchie | null
    departement_id: number | null
    est_marie: boolean | null
    nombre_enfants: number | null
    genre: $Enums.Genre | null
  }

  export type StaffMaxAggregateOutputType = {
    id: number | null
    nom_complet: string | null
    adresse_mail: string | null
    statut_hierarchique: $Enums.StaffHierarchie | null
    departement_id: number | null
    est_marie: boolean | null
    nombre_enfants: number | null
    genre: $Enums.Genre | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    nom_complet: number
    adresse_mail: number
    statut_hierarchique: number
    departement_id: number
    est_marie: number
    nombre_enfants: number
    genre: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    id?: true
    departement_id?: true
    nombre_enfants?: true
  }

  export type StaffSumAggregateInputType = {
    id?: true
    departement_id?: true
    nombre_enfants?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    nom_complet?: true
    adresse_mail?: true
    statut_hierarchique?: true
    departement_id?: true
    est_marie?: true
    nombre_enfants?: true
    genre?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    nom_complet?: true
    adresse_mail?: true
    statut_hierarchique?: true
    departement_id?: true
    est_marie?: true
    nombre_enfants?: true
    genre?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    nom_complet?: true
    adresse_mail?: true
    statut_hierarchique?: true
    departement_id?: true
    est_marie?: true
    nombre_enfants?: true
    genre?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
    orderBy?: staffOrderByWithAggregationInput | staffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: number
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    departement_id: number | null
    est_marie: boolean
    nombre_enfants: number
    genre: $Enums.Genre
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_complet?: boolean
    adresse_mail?: boolean
    statut_hierarchique?: boolean
    departement_id?: boolean
    est_marie?: boolean
    nombre_enfants?: boolean
    genre?: boolean
    departement?: boolean | staff$departementArgs<ExtArgs>
    mail?: boolean | staff$mailArgs<ExtArgs>
    users?: boolean | staff$usersArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>



  export type staffSelectScalar = {
    id?: boolean
    nom_complet?: boolean
    adresse_mail?: boolean
    statut_hierarchique?: boolean
    departement_id?: boolean
    est_marie?: boolean
    nombre_enfants?: boolean
    genre?: boolean
  }

  export type staffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom_complet" | "adresse_mail" | "statut_hierarchique" | "departement_id" | "est_marie" | "nombre_enfants" | "genre", ExtArgs["result"]["staff"]>
  export type staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | staff$departementArgs<ExtArgs>
    mail?: boolean | staff$mailArgs<ExtArgs>
    users?: boolean | staff$usersArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staff"
    objects: {
      departement: Prisma.$departementsPayload<ExtArgs> | null
      mail: Prisma.$mailPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom_complet: string
      adresse_mail: string
      statut_hierarchique: $Enums.StaffHierarchie
      departement_id: number | null
      est_marie: boolean
      nombre_enfants: number
      genre: $Enums.Genre
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = $Result.GetResult<Prisma.$staffPayload, S>

  type staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff'], meta: { name: 'staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffFindUniqueArgs>(args: SelectSubset<T, staffFindUniqueArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(args: SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffFindFirstArgs>(args?: SelectSubset<T, staffFindFirstArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(args?: SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends staffFindManyArgs>(args?: SelectSubset<T, staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends staffCreateArgs>(args: SelectSubset<T, staffCreateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {staffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffCreateManyArgs>(args?: SelectSubset<T, staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends staffDeleteArgs>(args: SelectSubset<T, staffDeleteArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffUpdateArgs>(args: SelectSubset<T, staffUpdateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffDeleteManyArgs>(args?: SelectSubset<T, staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffUpdateManyArgs>(args: SelectSubset<T, staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends staffUpsertArgs>(args: SelectSubset<T, staffUpsertArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends staffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffGroupByArgs['orderBy'] }
        : { orderBy?: staffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staff model
   */
  readonly fields: staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departement<T extends staff$departementArgs<ExtArgs> = {}>(args?: Subset<T, staff$departementArgs<ExtArgs>>): Prisma__departementsClient<$Result.GetResult<Prisma.$departementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mail<T extends staff$mailArgs<ExtArgs> = {}>(args?: Subset<T, staff$mailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends staff$usersArgs<ExtArgs> = {}>(args?: Subset<T, staff$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the staff model
   */
  interface staffFieldRefs {
    readonly id: FieldRef<"staff", 'Int'>
    readonly nom_complet: FieldRef<"staff", 'String'>
    readonly adresse_mail: FieldRef<"staff", 'String'>
    readonly statut_hierarchique: FieldRef<"staff", 'StaffHierarchie'>
    readonly departement_id: FieldRef<"staff", 'Int'>
    readonly est_marie: FieldRef<"staff", 'Boolean'>
    readonly nombre_enfants: FieldRef<"staff", 'Int'>
    readonly genre: FieldRef<"staff", 'Genre'>
  }
    

  // Custom InputTypes
  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findFirst
   */
  export type staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findMany
   */
  export type staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff create
   */
  export type staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }

  /**
   * staff createMany
   */
  export type staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff update
   */
  export type staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff upsert
   */
  export type staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }

  /**
   * staff delete
   */
  export type staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to delete.
     */
    limit?: number
  }

  /**
   * staff.departement
   */
  export type staff$departementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departements
     */
    select?: departementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departements
     */
    omit?: departementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departementsInclude<ExtArgs> | null
    where?: departementsWhereInput
  }

  /**
   * staff.mail
   */
  export type staff$mailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    where?: mailWhereInput
    orderBy?: mailOrderByWithRelationInput | mailOrderByWithRelationInput[]
    cursor?: mailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MailScalarFieldEnum | MailScalarFieldEnum[]
  }

  /**
   * staff.users
   */
  export type staff$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * staff without action
   */
  export type staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    staff_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    staff_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password_hash: string | null
    role: $Enums.UserRole | null
    staff_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password_hash: string | null
    role: $Enums.UserRole | null
    staff_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password_hash: number
    role: number
    staff_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    staff_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    staff_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    staff_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    staff_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    staff_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password_hash: string
    role: $Enums.UserRole
    staff_id: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    staff_id?: boolean
    staff?: boolean | users$staffArgs<ExtArgs>
    taches?: boolean | users$tachesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    staff_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password_hash" | "role" | "staff_id", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | users$staffArgs<ExtArgs>
    taches?: boolean | users$tachesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      staff: Prisma.$staffPayload<ExtArgs> | null
      taches: Prisma.$tachesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password_hash: string
      role: $Enums.UserRole
      staff_id: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends users$staffArgs<ExtArgs> = {}>(args?: Subset<T, users$staffArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    taches<T extends users$tachesArgs<ExtArgs> = {}>(args?: Subset<T, users$tachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'UserRole'>
    readonly staff_id: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.staff
   */
  export type users$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * users.taches
   */
  export type users$tachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    where?: tachesWhereInput
    orderBy?: tachesOrderByWithRelationInput | tachesOrderByWithRelationInput[]
    cursor?: tachesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TachesScalarFieldEnum | TachesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model mail
   */

  export type AggregateMail = {
    _count: MailCountAggregateOutputType | null
    _avg: MailAvgAggregateOutputType | null
    _sum: MailSumAggregateOutputType | null
    _min: MailMinAggregateOutputType | null
    _max: MailMaxAggregateOutputType | null
  }

  export type MailAvgAggregateOutputType = {
    id: number | null
    expediteur_staff_id: number | null
    categorie_id: number | null
    privacy_id: number | null
    handler_user_id: number | null
  }

  export type MailSumAggregateOutputType = {
    id: number | null
    expediteur_staff_id: number | null
    categorie_id: number | null
    privacy_id: number | null
    handler_user_id: number | null
  }

  export type MailMinAggregateOutputType = {
    id: number | null
    objet: string | null
    contenu: string | null
    date_reception: Date | null
    expediteur_staff_id: number | null
    categorie_id: number | null
    privacy_id: number | null
    handler_user_id: number | null
  }

  export type MailMaxAggregateOutputType = {
    id: number | null
    objet: string | null
    contenu: string | null
    date_reception: Date | null
    expediteur_staff_id: number | null
    categorie_id: number | null
    privacy_id: number | null
    handler_user_id: number | null
  }

  export type MailCountAggregateOutputType = {
    id: number
    objet: number
    contenu: number
    date_reception: number
    expediteur_staff_id: number
    categorie_id: number
    privacy_id: number
    handler_user_id: number
    _all: number
  }


  export type MailAvgAggregateInputType = {
    id?: true
    expediteur_staff_id?: true
    categorie_id?: true
    privacy_id?: true
    handler_user_id?: true
  }

  export type MailSumAggregateInputType = {
    id?: true
    expediteur_staff_id?: true
    categorie_id?: true
    privacy_id?: true
    handler_user_id?: true
  }

  export type MailMinAggregateInputType = {
    id?: true
    objet?: true
    contenu?: true
    date_reception?: true
    expediteur_staff_id?: true
    categorie_id?: true
    privacy_id?: true
    handler_user_id?: true
  }

  export type MailMaxAggregateInputType = {
    id?: true
    objet?: true
    contenu?: true
    date_reception?: true
    expediteur_staff_id?: true
    categorie_id?: true
    privacy_id?: true
    handler_user_id?: true
  }

  export type MailCountAggregateInputType = {
    id?: true
    objet?: true
    contenu?: true
    date_reception?: true
    expediteur_staff_id?: true
    categorie_id?: true
    privacy_id?: true
    handler_user_id?: true
    _all?: true
  }

  export type MailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mail to aggregate.
     */
    where?: mailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mail to fetch.
     */
    orderBy?: mailOrderByWithRelationInput | mailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mail from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mail.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mail
    **/
    _count?: true | MailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailMaxAggregateInputType
  }

  export type GetMailAggregateType<T extends MailAggregateArgs> = {
        [P in keyof T & keyof AggregateMail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMail[P]>
      : GetScalarType<T[P], AggregateMail[P]>
  }




  export type mailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mailWhereInput
    orderBy?: mailOrderByWithAggregationInput | mailOrderByWithAggregationInput[]
    by: MailScalarFieldEnum[] | MailScalarFieldEnum
    having?: mailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailCountAggregateInputType | true
    _avg?: MailAvgAggregateInputType
    _sum?: MailSumAggregateInputType
    _min?: MailMinAggregateInputType
    _max?: MailMaxAggregateInputType
  }

  export type MailGroupByOutputType = {
    id: number
    objet: string
    contenu: string | null
    date_reception: Date
    expediteur_staff_id: number | null
    categorie_id: number | null
    privacy_id: number | null
    handler_user_id: number | null
    _count: MailCountAggregateOutputType | null
    _avg: MailAvgAggregateOutputType | null
    _sum: MailSumAggregateOutputType | null
    _min: MailMinAggregateOutputType | null
    _max: MailMaxAggregateOutputType | null
  }

  type GetMailGroupByPayload<T extends mailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailGroupByOutputType[P]>
            : GetScalarType<T[P], MailGroupByOutputType[P]>
        }
      >
    >


  export type mailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    objet?: boolean
    contenu?: boolean
    date_reception?: boolean
    expediteur_staff_id?: boolean
    categorie_id?: boolean
    privacy_id?: boolean
    handler_user_id?: boolean
    expediteur?: boolean | mail$expediteurArgs<ExtArgs>
    categorie?: boolean | mail$categorieArgs<ExtArgs>
    privacy?: boolean | mail$privacyArgs<ExtArgs>
    taches?: boolean | mail$tachesArgs<ExtArgs>
    _count?: boolean | MailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mail"]>



  export type mailSelectScalar = {
    id?: boolean
    objet?: boolean
    contenu?: boolean
    date_reception?: boolean
    expediteur_staff_id?: boolean
    categorie_id?: boolean
    privacy_id?: boolean
    handler_user_id?: boolean
  }

  export type mailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "objet" | "contenu" | "date_reception" | "expediteur_staff_id" | "categorie_id" | "privacy_id" | "handler_user_id", ExtArgs["result"]["mail"]>
  export type mailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expediteur?: boolean | mail$expediteurArgs<ExtArgs>
    categorie?: boolean | mail$categorieArgs<ExtArgs>
    privacy?: boolean | mail$privacyArgs<ExtArgs>
    taches?: boolean | mail$tachesArgs<ExtArgs>
    _count?: boolean | MailCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $mailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mail"
    objects: {
      expediteur: Prisma.$staffPayload<ExtArgs> | null
      categorie: Prisma.$categoryPayload<ExtArgs> | null
      privacy: Prisma.$privacyPayload<ExtArgs> | null
      taches: Prisma.$tachesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      objet: string
      contenu: string | null
      date_reception: Date
      expediteur_staff_id: number | null
      categorie_id: number | null
      privacy_id: number | null
      handler_user_id: number | null
    }, ExtArgs["result"]["mail"]>
    composites: {}
  }

  type mailGetPayload<S extends boolean | null | undefined | mailDefaultArgs> = $Result.GetResult<Prisma.$mailPayload, S>

  type mailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MailCountAggregateInputType | true
    }

  export interface mailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mail'], meta: { name: 'mail' } }
    /**
     * Find zero or one Mail that matches the filter.
     * @param {mailFindUniqueArgs} args - Arguments to find a Mail
     * @example
     * // Get one Mail
     * const mail = await prisma.mail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mailFindUniqueArgs>(args: SelectSubset<T, mailFindUniqueArgs<ExtArgs>>): Prisma__mailClient<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mailFindUniqueOrThrowArgs} args - Arguments to find a Mail
     * @example
     * // Get one Mail
     * const mail = await prisma.mail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mailFindUniqueOrThrowArgs>(args: SelectSubset<T, mailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mailClient<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailFindFirstArgs} args - Arguments to find a Mail
     * @example
     * // Get one Mail
     * const mail = await prisma.mail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mailFindFirstArgs>(args?: SelectSubset<T, mailFindFirstArgs<ExtArgs>>): Prisma__mailClient<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailFindFirstOrThrowArgs} args - Arguments to find a Mail
     * @example
     * // Get one Mail
     * const mail = await prisma.mail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mailFindFirstOrThrowArgs>(args?: SelectSubset<T, mailFindFirstOrThrowArgs<ExtArgs>>): Prisma__mailClient<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mail
     * const mail = await prisma.mail.findMany()
     * 
     * // Get first 10 Mail
     * const mail = await prisma.mail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailWithIdOnly = await prisma.mail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mailFindManyArgs>(args?: SelectSubset<T, mailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mail.
     * @param {mailCreateArgs} args - Arguments to create a Mail.
     * @example
     * // Create one Mail
     * const Mail = await prisma.mail.create({
     *   data: {
     *     // ... data to create a Mail
     *   }
     * })
     * 
     */
    create<T extends mailCreateArgs>(args: SelectSubset<T, mailCreateArgs<ExtArgs>>): Prisma__mailClient<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mail.
     * @param {mailCreateManyArgs} args - Arguments to create many Mail.
     * @example
     * // Create many Mail
     * const mail = await prisma.mail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mailCreateManyArgs>(args?: SelectSubset<T, mailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mail.
     * @param {mailDeleteArgs} args - Arguments to delete one Mail.
     * @example
     * // Delete one Mail
     * const Mail = await prisma.mail.delete({
     *   where: {
     *     // ... filter to delete one Mail
     *   }
     * })
     * 
     */
    delete<T extends mailDeleteArgs>(args: SelectSubset<T, mailDeleteArgs<ExtArgs>>): Prisma__mailClient<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mail.
     * @param {mailUpdateArgs} args - Arguments to update one Mail.
     * @example
     * // Update one Mail
     * const mail = await prisma.mail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mailUpdateArgs>(args: SelectSubset<T, mailUpdateArgs<ExtArgs>>): Prisma__mailClient<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mail.
     * @param {mailDeleteManyArgs} args - Arguments to filter Mail to delete.
     * @example
     * // Delete a few Mail
     * const { count } = await prisma.mail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mailDeleteManyArgs>(args?: SelectSubset<T, mailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mail
     * const mail = await prisma.mail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mailUpdateManyArgs>(args: SelectSubset<T, mailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mail.
     * @param {mailUpsertArgs} args - Arguments to update or create a Mail.
     * @example
     * // Update or create a Mail
     * const mail = await prisma.mail.upsert({
     *   create: {
     *     // ... data to create a Mail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mail we want to update
     *   }
     * })
     */
    upsert<T extends mailUpsertArgs>(args: SelectSubset<T, mailUpsertArgs<ExtArgs>>): Prisma__mailClient<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailCountArgs} args - Arguments to filter Mail to count.
     * @example
     * // Count the number of Mail
     * const count = await prisma.mail.count({
     *   where: {
     *     // ... the filter for the Mail we want to count
     *   }
     * })
    **/
    count<T extends mailCountArgs>(
      args?: Subset<T, mailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MailAggregateArgs>(args: Subset<T, MailAggregateArgs>): Prisma.PrismaPromise<GetMailAggregateType<T>>

    /**
     * Group by Mail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mailGroupByArgs['orderBy'] }
        : { orderBy?: mailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mail model
   */
  readonly fields: mailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expediteur<T extends mail$expediteurArgs<ExtArgs> = {}>(args?: Subset<T, mail$expediteurArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categorie<T extends mail$categorieArgs<ExtArgs> = {}>(args?: Subset<T, mail$categorieArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    privacy<T extends mail$privacyArgs<ExtArgs> = {}>(args?: Subset<T, mail$privacyArgs<ExtArgs>>): Prisma__privacyClient<$Result.GetResult<Prisma.$privacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    taches<T extends mail$tachesArgs<ExtArgs> = {}>(args?: Subset<T, mail$tachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mail model
   */
  interface mailFieldRefs {
    readonly id: FieldRef<"mail", 'Int'>
    readonly objet: FieldRef<"mail", 'String'>
    readonly contenu: FieldRef<"mail", 'String'>
    readonly date_reception: FieldRef<"mail", 'DateTime'>
    readonly expediteur_staff_id: FieldRef<"mail", 'Int'>
    readonly categorie_id: FieldRef<"mail", 'Int'>
    readonly privacy_id: FieldRef<"mail", 'Int'>
    readonly handler_user_id: FieldRef<"mail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mail findUnique
   */
  export type mailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    /**
     * Filter, which mail to fetch.
     */
    where: mailWhereUniqueInput
  }

  /**
   * mail findUniqueOrThrow
   */
  export type mailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    /**
     * Filter, which mail to fetch.
     */
    where: mailWhereUniqueInput
  }

  /**
   * mail findFirst
   */
  export type mailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    /**
     * Filter, which mail to fetch.
     */
    where?: mailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mail to fetch.
     */
    orderBy?: mailOrderByWithRelationInput | mailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mail.
     */
    cursor?: mailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mail from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mail.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mail.
     */
    distinct?: MailScalarFieldEnum | MailScalarFieldEnum[]
  }

  /**
   * mail findFirstOrThrow
   */
  export type mailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    /**
     * Filter, which mail to fetch.
     */
    where?: mailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mail to fetch.
     */
    orderBy?: mailOrderByWithRelationInput | mailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mail.
     */
    cursor?: mailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mail from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mail.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mail.
     */
    distinct?: MailScalarFieldEnum | MailScalarFieldEnum[]
  }

  /**
   * mail findMany
   */
  export type mailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    /**
     * Filter, which mail to fetch.
     */
    where?: mailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mail to fetch.
     */
    orderBy?: mailOrderByWithRelationInput | mailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mail.
     */
    cursor?: mailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mail from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mail.
     */
    skip?: number
    distinct?: MailScalarFieldEnum | MailScalarFieldEnum[]
  }

  /**
   * mail create
   */
  export type mailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    /**
     * The data needed to create a mail.
     */
    data: XOR<mailCreateInput, mailUncheckedCreateInput>
  }

  /**
   * mail createMany
   */
  export type mailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mail.
     */
    data: mailCreateManyInput | mailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mail update
   */
  export type mailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    /**
     * The data needed to update a mail.
     */
    data: XOR<mailUpdateInput, mailUncheckedUpdateInput>
    /**
     * Choose, which mail to update.
     */
    where: mailWhereUniqueInput
  }

  /**
   * mail updateMany
   */
  export type mailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mail.
     */
    data: XOR<mailUpdateManyMutationInput, mailUncheckedUpdateManyInput>
    /**
     * Filter which mail to update
     */
    where?: mailWhereInput
    /**
     * Limit how many mail to update.
     */
    limit?: number
  }

  /**
   * mail upsert
   */
  export type mailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    /**
     * The filter to search for the mail to update in case it exists.
     */
    where: mailWhereUniqueInput
    /**
     * In case the mail found by the `where` argument doesn't exist, create a new mail with this data.
     */
    create: XOR<mailCreateInput, mailUncheckedCreateInput>
    /**
     * In case the mail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mailUpdateInput, mailUncheckedUpdateInput>
  }

  /**
   * mail delete
   */
  export type mailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
    /**
     * Filter which mail to delete.
     */
    where: mailWhereUniqueInput
  }

  /**
   * mail deleteMany
   */
  export type mailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mail to delete
     */
    where?: mailWhereInput
    /**
     * Limit how many mail to delete.
     */
    limit?: number
  }

  /**
   * mail.expediteur
   */
  export type mail$expediteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * mail.categorie
   */
  export type mail$categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * mail.privacy
   */
  export type mail$privacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the privacy
     */
    select?: privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the privacy
     */
    omit?: privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: privacyInclude<ExtArgs> | null
    where?: privacyWhereInput
  }

  /**
   * mail.taches
   */
  export type mail$tachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    where?: tachesWhereInput
    orderBy?: tachesOrderByWithRelationInput | tachesOrderByWithRelationInput[]
    cursor?: tachesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TachesScalarFieldEnum | TachesScalarFieldEnum[]
  }

  /**
   * mail without action
   */
  export type mailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mail
     */
    select?: mailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mail
     */
    omit?: mailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mailInclude<ExtArgs> | null
  }


  /**
   * Model taches
   */

  export type AggregateTaches = {
    _count: TachesCountAggregateOutputType | null
    _avg: TachesAvgAggregateOutputType | null
    _sum: TachesSumAggregateOutputType | null
    _min: TachesMinAggregateOutputType | null
    _max: TachesMaxAggregateOutputType | null
  }

  export type TachesAvgAggregateOutputType = {
    id: number | null
    mail_id: number | null
    agent_user_id: number | null
  }

  export type TachesSumAggregateOutputType = {
    id: number | null
    mail_id: number | null
    agent_user_id: number | null
  }

  export type TachesMinAggregateOutputType = {
    id: number | null
    mail_id: number | null
    agent_user_id: number | null
    statut_tache: $Enums.MailStatut | null
    priorite_calculee: $Enums.MailPriorite | null
    date_attribution: Date | null
    commentaire: string | null
  }

  export type TachesMaxAggregateOutputType = {
    id: number | null
    mail_id: number | null
    agent_user_id: number | null
    statut_tache: $Enums.MailStatut | null
    priorite_calculee: $Enums.MailPriorite | null
    date_attribution: Date | null
    commentaire: string | null
  }

  export type TachesCountAggregateOutputType = {
    id: number
    mail_id: number
    agent_user_id: number
    statut_tache: number
    priorite_calculee: number
    date_attribution: number
    commentaire: number
    _all: number
  }


  export type TachesAvgAggregateInputType = {
    id?: true
    mail_id?: true
    agent_user_id?: true
  }

  export type TachesSumAggregateInputType = {
    id?: true
    mail_id?: true
    agent_user_id?: true
  }

  export type TachesMinAggregateInputType = {
    id?: true
    mail_id?: true
    agent_user_id?: true
    statut_tache?: true
    priorite_calculee?: true
    date_attribution?: true
    commentaire?: true
  }

  export type TachesMaxAggregateInputType = {
    id?: true
    mail_id?: true
    agent_user_id?: true
    statut_tache?: true
    priorite_calculee?: true
    date_attribution?: true
    commentaire?: true
  }

  export type TachesCountAggregateInputType = {
    id?: true
    mail_id?: true
    agent_user_id?: true
    statut_tache?: true
    priorite_calculee?: true
    date_attribution?: true
    commentaire?: true
    _all?: true
  }

  export type TachesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taches to aggregate.
     */
    where?: tachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taches to fetch.
     */
    orderBy?: tachesOrderByWithRelationInput | tachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned taches
    **/
    _count?: true | TachesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TachesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TachesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TachesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TachesMaxAggregateInputType
  }

  export type GetTachesAggregateType<T extends TachesAggregateArgs> = {
        [P in keyof T & keyof AggregateTaches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaches[P]>
      : GetScalarType<T[P], AggregateTaches[P]>
  }




  export type tachesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tachesWhereInput
    orderBy?: tachesOrderByWithAggregationInput | tachesOrderByWithAggregationInput[]
    by: TachesScalarFieldEnum[] | TachesScalarFieldEnum
    having?: tachesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TachesCountAggregateInputType | true
    _avg?: TachesAvgAggregateInputType
    _sum?: TachesSumAggregateInputType
    _min?: TachesMinAggregateInputType
    _max?: TachesMaxAggregateInputType
  }

  export type TachesGroupByOutputType = {
    id: number
    mail_id: number
    agent_user_id: number
    statut_tache: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution: Date | null
    commentaire: string | null
    _count: TachesCountAggregateOutputType | null
    _avg: TachesAvgAggregateOutputType | null
    _sum: TachesSumAggregateOutputType | null
    _min: TachesMinAggregateOutputType | null
    _max: TachesMaxAggregateOutputType | null
  }

  type GetTachesGroupByPayload<T extends tachesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TachesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TachesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TachesGroupByOutputType[P]>
            : GetScalarType<T[P], TachesGroupByOutputType[P]>
        }
      >
    >


  export type tachesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mail_id?: boolean
    agent_user_id?: boolean
    statut_tache?: boolean
    priorite_calculee?: boolean
    date_attribution?: boolean
    commentaire?: boolean
    mail?: boolean | mailDefaultArgs<ExtArgs>
    agent?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taches"]>



  export type tachesSelectScalar = {
    id?: boolean
    mail_id?: boolean
    agent_user_id?: boolean
    statut_tache?: boolean
    priorite_calculee?: boolean
    date_attribution?: boolean
    commentaire?: boolean
  }

  export type tachesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mail_id" | "agent_user_id" | "statut_tache" | "priorite_calculee" | "date_attribution" | "commentaire", ExtArgs["result"]["taches"]>
  export type tachesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mail?: boolean | mailDefaultArgs<ExtArgs>
    agent?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $tachesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "taches"
    objects: {
      mail: Prisma.$mailPayload<ExtArgs>
      agent: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mail_id: number
      agent_user_id: number
      statut_tache: $Enums.MailStatut
      priorite_calculee: $Enums.MailPriorite
      date_attribution: Date | null
      commentaire: string | null
    }, ExtArgs["result"]["taches"]>
    composites: {}
  }

  type tachesGetPayload<S extends boolean | null | undefined | tachesDefaultArgs> = $Result.GetResult<Prisma.$tachesPayload, S>

  type tachesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tachesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TachesCountAggregateInputType | true
    }

  export interface tachesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['taches'], meta: { name: 'taches' } }
    /**
     * Find zero or one Taches that matches the filter.
     * @param {tachesFindUniqueArgs} args - Arguments to find a Taches
     * @example
     * // Get one Taches
     * const taches = await prisma.taches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tachesFindUniqueArgs>(args: SelectSubset<T, tachesFindUniqueArgs<ExtArgs>>): Prisma__tachesClient<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tachesFindUniqueOrThrowArgs} args - Arguments to find a Taches
     * @example
     * // Get one Taches
     * const taches = await prisma.taches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tachesFindUniqueOrThrowArgs>(args: SelectSubset<T, tachesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tachesClient<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tachesFindFirstArgs} args - Arguments to find a Taches
     * @example
     * // Get one Taches
     * const taches = await prisma.taches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tachesFindFirstArgs>(args?: SelectSubset<T, tachesFindFirstArgs<ExtArgs>>): Prisma__tachesClient<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tachesFindFirstOrThrowArgs} args - Arguments to find a Taches
     * @example
     * // Get one Taches
     * const taches = await prisma.taches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tachesFindFirstOrThrowArgs>(args?: SelectSubset<T, tachesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tachesClient<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tachesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taches
     * const taches = await prisma.taches.findMany()
     * 
     * // Get first 10 Taches
     * const taches = await prisma.taches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tachesWithIdOnly = await prisma.taches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tachesFindManyArgs>(args?: SelectSubset<T, tachesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taches.
     * @param {tachesCreateArgs} args - Arguments to create a Taches.
     * @example
     * // Create one Taches
     * const Taches = await prisma.taches.create({
     *   data: {
     *     // ... data to create a Taches
     *   }
     * })
     * 
     */
    create<T extends tachesCreateArgs>(args: SelectSubset<T, tachesCreateArgs<ExtArgs>>): Prisma__tachesClient<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taches.
     * @param {tachesCreateManyArgs} args - Arguments to create many Taches.
     * @example
     * // Create many Taches
     * const taches = await prisma.taches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tachesCreateManyArgs>(args?: SelectSubset<T, tachesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Taches.
     * @param {tachesDeleteArgs} args - Arguments to delete one Taches.
     * @example
     * // Delete one Taches
     * const Taches = await prisma.taches.delete({
     *   where: {
     *     // ... filter to delete one Taches
     *   }
     * })
     * 
     */
    delete<T extends tachesDeleteArgs>(args: SelectSubset<T, tachesDeleteArgs<ExtArgs>>): Prisma__tachesClient<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taches.
     * @param {tachesUpdateArgs} args - Arguments to update one Taches.
     * @example
     * // Update one Taches
     * const taches = await prisma.taches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tachesUpdateArgs>(args: SelectSubset<T, tachesUpdateArgs<ExtArgs>>): Prisma__tachesClient<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taches.
     * @param {tachesDeleteManyArgs} args - Arguments to filter Taches to delete.
     * @example
     * // Delete a few Taches
     * const { count } = await prisma.taches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tachesDeleteManyArgs>(args?: SelectSubset<T, tachesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tachesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taches
     * const taches = await prisma.taches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tachesUpdateManyArgs>(args: SelectSubset<T, tachesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Taches.
     * @param {tachesUpsertArgs} args - Arguments to update or create a Taches.
     * @example
     * // Update or create a Taches
     * const taches = await prisma.taches.upsert({
     *   create: {
     *     // ... data to create a Taches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taches we want to update
     *   }
     * })
     */
    upsert<T extends tachesUpsertArgs>(args: SelectSubset<T, tachesUpsertArgs<ExtArgs>>): Prisma__tachesClient<$Result.GetResult<Prisma.$tachesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tachesCountArgs} args - Arguments to filter Taches to count.
     * @example
     * // Count the number of Taches
     * const count = await prisma.taches.count({
     *   where: {
     *     // ... the filter for the Taches we want to count
     *   }
     * })
    **/
    count<T extends tachesCountArgs>(
      args?: Subset<T, tachesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TachesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TachesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TachesAggregateArgs>(args: Subset<T, TachesAggregateArgs>): Prisma.PrismaPromise<GetTachesAggregateType<T>>

    /**
     * Group by Taches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tachesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tachesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tachesGroupByArgs['orderBy'] }
        : { orderBy?: tachesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tachesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTachesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the taches model
   */
  readonly fields: tachesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for taches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tachesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mail<T extends mailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mailDefaultArgs<ExtArgs>>): Prisma__mailClient<$Result.GetResult<Prisma.$mailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the taches model
   */
  interface tachesFieldRefs {
    readonly id: FieldRef<"taches", 'Int'>
    readonly mail_id: FieldRef<"taches", 'Int'>
    readonly agent_user_id: FieldRef<"taches", 'Int'>
    readonly statut_tache: FieldRef<"taches", 'MailStatut'>
    readonly priorite_calculee: FieldRef<"taches", 'MailPriorite'>
    readonly date_attribution: FieldRef<"taches", 'DateTime'>
    readonly commentaire: FieldRef<"taches", 'String'>
  }
    

  // Custom InputTypes
  /**
   * taches findUnique
   */
  export type tachesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    /**
     * Filter, which taches to fetch.
     */
    where: tachesWhereUniqueInput
  }

  /**
   * taches findUniqueOrThrow
   */
  export type tachesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    /**
     * Filter, which taches to fetch.
     */
    where: tachesWhereUniqueInput
  }

  /**
   * taches findFirst
   */
  export type tachesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    /**
     * Filter, which taches to fetch.
     */
    where?: tachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taches to fetch.
     */
    orderBy?: tachesOrderByWithRelationInput | tachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taches.
     */
    cursor?: tachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taches.
     */
    distinct?: TachesScalarFieldEnum | TachesScalarFieldEnum[]
  }

  /**
   * taches findFirstOrThrow
   */
  export type tachesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    /**
     * Filter, which taches to fetch.
     */
    where?: tachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taches to fetch.
     */
    orderBy?: tachesOrderByWithRelationInput | tachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taches.
     */
    cursor?: tachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taches.
     */
    distinct?: TachesScalarFieldEnum | TachesScalarFieldEnum[]
  }

  /**
   * taches findMany
   */
  export type tachesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    /**
     * Filter, which taches to fetch.
     */
    where?: tachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taches to fetch.
     */
    orderBy?: tachesOrderByWithRelationInput | tachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing taches.
     */
    cursor?: tachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taches.
     */
    skip?: number
    distinct?: TachesScalarFieldEnum | TachesScalarFieldEnum[]
  }

  /**
   * taches create
   */
  export type tachesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    /**
     * The data needed to create a taches.
     */
    data: XOR<tachesCreateInput, tachesUncheckedCreateInput>
  }

  /**
   * taches createMany
   */
  export type tachesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many taches.
     */
    data: tachesCreateManyInput | tachesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * taches update
   */
  export type tachesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    /**
     * The data needed to update a taches.
     */
    data: XOR<tachesUpdateInput, tachesUncheckedUpdateInput>
    /**
     * Choose, which taches to update.
     */
    where: tachesWhereUniqueInput
  }

  /**
   * taches updateMany
   */
  export type tachesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update taches.
     */
    data: XOR<tachesUpdateManyMutationInput, tachesUncheckedUpdateManyInput>
    /**
     * Filter which taches to update
     */
    where?: tachesWhereInput
    /**
     * Limit how many taches to update.
     */
    limit?: number
  }

  /**
   * taches upsert
   */
  export type tachesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    /**
     * The filter to search for the taches to update in case it exists.
     */
    where: tachesWhereUniqueInput
    /**
     * In case the taches found by the `where` argument doesn't exist, create a new taches with this data.
     */
    create: XOR<tachesCreateInput, tachesUncheckedCreateInput>
    /**
     * In case the taches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tachesUpdateInput, tachesUncheckedUpdateInput>
  }

  /**
   * taches delete
   */
  export type tachesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
    /**
     * Filter which taches to delete.
     */
    where: tachesWhereUniqueInput
  }

  /**
   * taches deleteMany
   */
  export type tachesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taches to delete
     */
    where?: tachesWhereInput
    /**
     * Limit how many taches to delete.
     */
    limit?: number
  }

  /**
   * taches without action
   */
  export type tachesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taches
     */
    select?: tachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taches
     */
    omit?: tachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tachesInclude<ExtArgs> | null
  }


  /**
   * Model stats_gender_mail_count
   */

  export type AggregateStats_gender_mail_count = {
    _count: Stats_gender_mail_countCountAggregateOutputType | null
    _avg: Stats_gender_mail_countAvgAggregateOutputType | null
    _sum: Stats_gender_mail_countSumAggregateOutputType | null
    _min: Stats_gender_mail_countMinAggregateOutputType | null
    _max: Stats_gender_mail_countMaxAggregateOutputType | null
  }

  export type Stats_gender_mail_countAvgAggregateOutputType = {
    id: number | null
    mail_count: number | null
  }

  export type Stats_gender_mail_countSumAggregateOutputType = {
    id: number | null
    mail_count: number | null
  }

  export type Stats_gender_mail_countMinAggregateOutputType = {
    id: number | null
    genre: $Enums.Genre | null
    mail_count: number | null
  }

  export type Stats_gender_mail_countMaxAggregateOutputType = {
    id: number | null
    genre: $Enums.Genre | null
    mail_count: number | null
  }

  export type Stats_gender_mail_countCountAggregateOutputType = {
    id: number
    genre: number
    mail_count: number
    _all: number
  }


  export type Stats_gender_mail_countAvgAggregateInputType = {
    id?: true
    mail_count?: true
  }

  export type Stats_gender_mail_countSumAggregateInputType = {
    id?: true
    mail_count?: true
  }

  export type Stats_gender_mail_countMinAggregateInputType = {
    id?: true
    genre?: true
    mail_count?: true
  }

  export type Stats_gender_mail_countMaxAggregateInputType = {
    id?: true
    genre?: true
    mail_count?: true
  }

  export type Stats_gender_mail_countCountAggregateInputType = {
    id?: true
    genre?: true
    mail_count?: true
    _all?: true
  }

  export type Stats_gender_mail_countAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stats_gender_mail_count to aggregate.
     */
    where?: stats_gender_mail_countWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stats_gender_mail_counts to fetch.
     */
    orderBy?: stats_gender_mail_countOrderByWithRelationInput | stats_gender_mail_countOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stats_gender_mail_countWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stats_gender_mail_counts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stats_gender_mail_counts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stats_gender_mail_counts
    **/
    _count?: true | Stats_gender_mail_countCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stats_gender_mail_countAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stats_gender_mail_countSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stats_gender_mail_countMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stats_gender_mail_countMaxAggregateInputType
  }

  export type GetStats_gender_mail_countAggregateType<T extends Stats_gender_mail_countAggregateArgs> = {
        [P in keyof T & keyof AggregateStats_gender_mail_count]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStats_gender_mail_count[P]>
      : GetScalarType<T[P], AggregateStats_gender_mail_count[P]>
  }




  export type stats_gender_mail_countGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stats_gender_mail_countWhereInput
    orderBy?: stats_gender_mail_countOrderByWithAggregationInput | stats_gender_mail_countOrderByWithAggregationInput[]
    by: Stats_gender_mail_countScalarFieldEnum[] | Stats_gender_mail_countScalarFieldEnum
    having?: stats_gender_mail_countScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stats_gender_mail_countCountAggregateInputType | true
    _avg?: Stats_gender_mail_countAvgAggregateInputType
    _sum?: Stats_gender_mail_countSumAggregateInputType
    _min?: Stats_gender_mail_countMinAggregateInputType
    _max?: Stats_gender_mail_countMaxAggregateInputType
  }

  export type Stats_gender_mail_countGroupByOutputType = {
    id: number
    genre: $Enums.Genre
    mail_count: number
    _count: Stats_gender_mail_countCountAggregateOutputType | null
    _avg: Stats_gender_mail_countAvgAggregateOutputType | null
    _sum: Stats_gender_mail_countSumAggregateOutputType | null
    _min: Stats_gender_mail_countMinAggregateOutputType | null
    _max: Stats_gender_mail_countMaxAggregateOutputType | null
  }

  type GetStats_gender_mail_countGroupByPayload<T extends stats_gender_mail_countGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stats_gender_mail_countGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stats_gender_mail_countGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stats_gender_mail_countGroupByOutputType[P]>
            : GetScalarType<T[P], Stats_gender_mail_countGroupByOutputType[P]>
        }
      >
    >


  export type stats_gender_mail_countSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genre?: boolean
    mail_count?: boolean
  }, ExtArgs["result"]["stats_gender_mail_count"]>



  export type stats_gender_mail_countSelectScalar = {
    id?: boolean
    genre?: boolean
    mail_count?: boolean
  }

  export type stats_gender_mail_countOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genre" | "mail_count", ExtArgs["result"]["stats_gender_mail_count"]>

  export type $stats_gender_mail_countPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stats_gender_mail_count"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      genre: $Enums.Genre
      mail_count: number
    }, ExtArgs["result"]["stats_gender_mail_count"]>
    composites: {}
  }

  type stats_gender_mail_countGetPayload<S extends boolean | null | undefined | stats_gender_mail_countDefaultArgs> = $Result.GetResult<Prisma.$stats_gender_mail_countPayload, S>

  type stats_gender_mail_countCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stats_gender_mail_countFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stats_gender_mail_countCountAggregateInputType | true
    }

  export interface stats_gender_mail_countDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stats_gender_mail_count'], meta: { name: 'stats_gender_mail_count' } }
    /**
     * Find zero or one Stats_gender_mail_count that matches the filter.
     * @param {stats_gender_mail_countFindUniqueArgs} args - Arguments to find a Stats_gender_mail_count
     * @example
     * // Get one Stats_gender_mail_count
     * const stats_gender_mail_count = await prisma.stats_gender_mail_count.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stats_gender_mail_countFindUniqueArgs>(args: SelectSubset<T, stats_gender_mail_countFindUniqueArgs<ExtArgs>>): Prisma__stats_gender_mail_countClient<$Result.GetResult<Prisma.$stats_gender_mail_countPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stats_gender_mail_count that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stats_gender_mail_countFindUniqueOrThrowArgs} args - Arguments to find a Stats_gender_mail_count
     * @example
     * // Get one Stats_gender_mail_count
     * const stats_gender_mail_count = await prisma.stats_gender_mail_count.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stats_gender_mail_countFindUniqueOrThrowArgs>(args: SelectSubset<T, stats_gender_mail_countFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stats_gender_mail_countClient<$Result.GetResult<Prisma.$stats_gender_mail_countPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stats_gender_mail_count that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stats_gender_mail_countFindFirstArgs} args - Arguments to find a Stats_gender_mail_count
     * @example
     * // Get one Stats_gender_mail_count
     * const stats_gender_mail_count = await prisma.stats_gender_mail_count.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stats_gender_mail_countFindFirstArgs>(args?: SelectSubset<T, stats_gender_mail_countFindFirstArgs<ExtArgs>>): Prisma__stats_gender_mail_countClient<$Result.GetResult<Prisma.$stats_gender_mail_countPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stats_gender_mail_count that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stats_gender_mail_countFindFirstOrThrowArgs} args - Arguments to find a Stats_gender_mail_count
     * @example
     * // Get one Stats_gender_mail_count
     * const stats_gender_mail_count = await prisma.stats_gender_mail_count.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stats_gender_mail_countFindFirstOrThrowArgs>(args?: SelectSubset<T, stats_gender_mail_countFindFirstOrThrowArgs<ExtArgs>>): Prisma__stats_gender_mail_countClient<$Result.GetResult<Prisma.$stats_gender_mail_countPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stats_gender_mail_counts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stats_gender_mail_countFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats_gender_mail_counts
     * const stats_gender_mail_counts = await prisma.stats_gender_mail_count.findMany()
     * 
     * // Get first 10 Stats_gender_mail_counts
     * const stats_gender_mail_counts = await prisma.stats_gender_mail_count.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stats_gender_mail_countWithIdOnly = await prisma.stats_gender_mail_count.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stats_gender_mail_countFindManyArgs>(args?: SelectSubset<T, stats_gender_mail_countFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stats_gender_mail_countPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stats_gender_mail_count.
     * @param {stats_gender_mail_countCreateArgs} args - Arguments to create a Stats_gender_mail_count.
     * @example
     * // Create one Stats_gender_mail_count
     * const Stats_gender_mail_count = await prisma.stats_gender_mail_count.create({
     *   data: {
     *     // ... data to create a Stats_gender_mail_count
     *   }
     * })
     * 
     */
    create<T extends stats_gender_mail_countCreateArgs>(args: SelectSubset<T, stats_gender_mail_countCreateArgs<ExtArgs>>): Prisma__stats_gender_mail_countClient<$Result.GetResult<Prisma.$stats_gender_mail_countPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stats_gender_mail_counts.
     * @param {stats_gender_mail_countCreateManyArgs} args - Arguments to create many Stats_gender_mail_counts.
     * @example
     * // Create many Stats_gender_mail_counts
     * const stats_gender_mail_count = await prisma.stats_gender_mail_count.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stats_gender_mail_countCreateManyArgs>(args?: SelectSubset<T, stats_gender_mail_countCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stats_gender_mail_count.
     * @param {stats_gender_mail_countDeleteArgs} args - Arguments to delete one Stats_gender_mail_count.
     * @example
     * // Delete one Stats_gender_mail_count
     * const Stats_gender_mail_count = await prisma.stats_gender_mail_count.delete({
     *   where: {
     *     // ... filter to delete one Stats_gender_mail_count
     *   }
     * })
     * 
     */
    delete<T extends stats_gender_mail_countDeleteArgs>(args: SelectSubset<T, stats_gender_mail_countDeleteArgs<ExtArgs>>): Prisma__stats_gender_mail_countClient<$Result.GetResult<Prisma.$stats_gender_mail_countPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stats_gender_mail_count.
     * @param {stats_gender_mail_countUpdateArgs} args - Arguments to update one Stats_gender_mail_count.
     * @example
     * // Update one Stats_gender_mail_count
     * const stats_gender_mail_count = await prisma.stats_gender_mail_count.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stats_gender_mail_countUpdateArgs>(args: SelectSubset<T, stats_gender_mail_countUpdateArgs<ExtArgs>>): Prisma__stats_gender_mail_countClient<$Result.GetResult<Prisma.$stats_gender_mail_countPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stats_gender_mail_counts.
     * @param {stats_gender_mail_countDeleteManyArgs} args - Arguments to filter Stats_gender_mail_counts to delete.
     * @example
     * // Delete a few Stats_gender_mail_counts
     * const { count } = await prisma.stats_gender_mail_count.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stats_gender_mail_countDeleteManyArgs>(args?: SelectSubset<T, stats_gender_mail_countDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats_gender_mail_counts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stats_gender_mail_countUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats_gender_mail_counts
     * const stats_gender_mail_count = await prisma.stats_gender_mail_count.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stats_gender_mail_countUpdateManyArgs>(args: SelectSubset<T, stats_gender_mail_countUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stats_gender_mail_count.
     * @param {stats_gender_mail_countUpsertArgs} args - Arguments to update or create a Stats_gender_mail_count.
     * @example
     * // Update or create a Stats_gender_mail_count
     * const stats_gender_mail_count = await prisma.stats_gender_mail_count.upsert({
     *   create: {
     *     // ... data to create a Stats_gender_mail_count
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stats_gender_mail_count we want to update
     *   }
     * })
     */
    upsert<T extends stats_gender_mail_countUpsertArgs>(args: SelectSubset<T, stats_gender_mail_countUpsertArgs<ExtArgs>>): Prisma__stats_gender_mail_countClient<$Result.GetResult<Prisma.$stats_gender_mail_countPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stats_gender_mail_counts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stats_gender_mail_countCountArgs} args - Arguments to filter Stats_gender_mail_counts to count.
     * @example
     * // Count the number of Stats_gender_mail_counts
     * const count = await prisma.stats_gender_mail_count.count({
     *   where: {
     *     // ... the filter for the Stats_gender_mail_counts we want to count
     *   }
     * })
    **/
    count<T extends stats_gender_mail_countCountArgs>(
      args?: Subset<T, stats_gender_mail_countCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stats_gender_mail_countCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stats_gender_mail_count.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stats_gender_mail_countAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stats_gender_mail_countAggregateArgs>(args: Subset<T, Stats_gender_mail_countAggregateArgs>): Prisma.PrismaPromise<GetStats_gender_mail_countAggregateType<T>>

    /**
     * Group by Stats_gender_mail_count.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stats_gender_mail_countGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stats_gender_mail_countGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stats_gender_mail_countGroupByArgs['orderBy'] }
        : { orderBy?: stats_gender_mail_countGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stats_gender_mail_countGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStats_gender_mail_countGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stats_gender_mail_count model
   */
  readonly fields: stats_gender_mail_countFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stats_gender_mail_count.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stats_gender_mail_countClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stats_gender_mail_count model
   */
  interface stats_gender_mail_countFieldRefs {
    readonly id: FieldRef<"stats_gender_mail_count", 'Int'>
    readonly genre: FieldRef<"stats_gender_mail_count", 'Genre'>
    readonly mail_count: FieldRef<"stats_gender_mail_count", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * stats_gender_mail_count findUnique
   */
  export type stats_gender_mail_countFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
    /**
     * Filter, which stats_gender_mail_count to fetch.
     */
    where: stats_gender_mail_countWhereUniqueInput
  }

  /**
   * stats_gender_mail_count findUniqueOrThrow
   */
  export type stats_gender_mail_countFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
    /**
     * Filter, which stats_gender_mail_count to fetch.
     */
    where: stats_gender_mail_countWhereUniqueInput
  }

  /**
   * stats_gender_mail_count findFirst
   */
  export type stats_gender_mail_countFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
    /**
     * Filter, which stats_gender_mail_count to fetch.
     */
    where?: stats_gender_mail_countWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stats_gender_mail_counts to fetch.
     */
    orderBy?: stats_gender_mail_countOrderByWithRelationInput | stats_gender_mail_countOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stats_gender_mail_counts.
     */
    cursor?: stats_gender_mail_countWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stats_gender_mail_counts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stats_gender_mail_counts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stats_gender_mail_counts.
     */
    distinct?: Stats_gender_mail_countScalarFieldEnum | Stats_gender_mail_countScalarFieldEnum[]
  }

  /**
   * stats_gender_mail_count findFirstOrThrow
   */
  export type stats_gender_mail_countFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
    /**
     * Filter, which stats_gender_mail_count to fetch.
     */
    where?: stats_gender_mail_countWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stats_gender_mail_counts to fetch.
     */
    orderBy?: stats_gender_mail_countOrderByWithRelationInput | stats_gender_mail_countOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stats_gender_mail_counts.
     */
    cursor?: stats_gender_mail_countWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stats_gender_mail_counts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stats_gender_mail_counts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stats_gender_mail_counts.
     */
    distinct?: Stats_gender_mail_countScalarFieldEnum | Stats_gender_mail_countScalarFieldEnum[]
  }

  /**
   * stats_gender_mail_count findMany
   */
  export type stats_gender_mail_countFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
    /**
     * Filter, which stats_gender_mail_counts to fetch.
     */
    where?: stats_gender_mail_countWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stats_gender_mail_counts to fetch.
     */
    orderBy?: stats_gender_mail_countOrderByWithRelationInput | stats_gender_mail_countOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stats_gender_mail_counts.
     */
    cursor?: stats_gender_mail_countWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stats_gender_mail_counts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stats_gender_mail_counts.
     */
    skip?: number
    distinct?: Stats_gender_mail_countScalarFieldEnum | Stats_gender_mail_countScalarFieldEnum[]
  }

  /**
   * stats_gender_mail_count create
   */
  export type stats_gender_mail_countCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
    /**
     * The data needed to create a stats_gender_mail_count.
     */
    data: XOR<stats_gender_mail_countCreateInput, stats_gender_mail_countUncheckedCreateInput>
  }

  /**
   * stats_gender_mail_count createMany
   */
  export type stats_gender_mail_countCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stats_gender_mail_counts.
     */
    data: stats_gender_mail_countCreateManyInput | stats_gender_mail_countCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stats_gender_mail_count update
   */
  export type stats_gender_mail_countUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
    /**
     * The data needed to update a stats_gender_mail_count.
     */
    data: XOR<stats_gender_mail_countUpdateInput, stats_gender_mail_countUncheckedUpdateInput>
    /**
     * Choose, which stats_gender_mail_count to update.
     */
    where: stats_gender_mail_countWhereUniqueInput
  }

  /**
   * stats_gender_mail_count updateMany
   */
  export type stats_gender_mail_countUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stats_gender_mail_counts.
     */
    data: XOR<stats_gender_mail_countUpdateManyMutationInput, stats_gender_mail_countUncheckedUpdateManyInput>
    /**
     * Filter which stats_gender_mail_counts to update
     */
    where?: stats_gender_mail_countWhereInput
    /**
     * Limit how many stats_gender_mail_counts to update.
     */
    limit?: number
  }

  /**
   * stats_gender_mail_count upsert
   */
  export type stats_gender_mail_countUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
    /**
     * The filter to search for the stats_gender_mail_count to update in case it exists.
     */
    where: stats_gender_mail_countWhereUniqueInput
    /**
     * In case the stats_gender_mail_count found by the `where` argument doesn't exist, create a new stats_gender_mail_count with this data.
     */
    create: XOR<stats_gender_mail_countCreateInput, stats_gender_mail_countUncheckedCreateInput>
    /**
     * In case the stats_gender_mail_count was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stats_gender_mail_countUpdateInput, stats_gender_mail_countUncheckedUpdateInput>
  }

  /**
   * stats_gender_mail_count delete
   */
  export type stats_gender_mail_countDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
    /**
     * Filter which stats_gender_mail_count to delete.
     */
    where: stats_gender_mail_countWhereUniqueInput
  }

  /**
   * stats_gender_mail_count deleteMany
   */
  export type stats_gender_mail_countDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stats_gender_mail_counts to delete
     */
    where?: stats_gender_mail_countWhereInput
    /**
     * Limit how many stats_gender_mail_counts to delete.
     */
    limit?: number
  }

  /**
   * stats_gender_mail_count without action
   */
  export type stats_gender_mail_countDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stats_gender_mail_count
     */
    select?: stats_gender_mail_countSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stats_gender_mail_count
     */
    omit?: stats_gender_mail_countOmit<ExtArgs> | null
  }


  /**
   * Model stat_mail_by_gender
   */

  export type AggregateStat_mail_by_gender = {
    _count: Stat_mail_by_genderCountAggregateOutputType | null
    _avg: Stat_mail_by_genderAvgAggregateOutputType | null
    _sum: Stat_mail_by_genderSumAggregateOutputType | null
    _min: Stat_mail_by_genderMinAggregateOutputType | null
    _max: Stat_mail_by_genderMaxAggregateOutputType | null
  }

  export type Stat_mail_by_genderAvgAggregateOutputType = {
    mail_count: number | null
  }

  export type Stat_mail_by_genderSumAggregateOutputType = {
    mail_count: number | null
  }

  export type Stat_mail_by_genderMinAggregateOutputType = {
    stat_date: Date | null
    gender: $Enums.GenderStat | null
    mail_count: number | null
  }

  export type Stat_mail_by_genderMaxAggregateOutputType = {
    stat_date: Date | null
    gender: $Enums.GenderStat | null
    mail_count: number | null
  }

  export type Stat_mail_by_genderCountAggregateOutputType = {
    stat_date: number
    gender: number
    mail_count: number
    _all: number
  }


  export type Stat_mail_by_genderAvgAggregateInputType = {
    mail_count?: true
  }

  export type Stat_mail_by_genderSumAggregateInputType = {
    mail_count?: true
  }

  export type Stat_mail_by_genderMinAggregateInputType = {
    stat_date?: true
    gender?: true
    mail_count?: true
  }

  export type Stat_mail_by_genderMaxAggregateInputType = {
    stat_date?: true
    gender?: true
    mail_count?: true
  }

  export type Stat_mail_by_genderCountAggregateInputType = {
    stat_date?: true
    gender?: true
    mail_count?: true
    _all?: true
  }

  export type Stat_mail_by_genderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stat_mail_by_gender to aggregate.
     */
    where?: stat_mail_by_genderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_mail_by_genders to fetch.
     */
    orderBy?: stat_mail_by_genderOrderByWithRelationInput | stat_mail_by_genderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stat_mail_by_genderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_mail_by_genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_mail_by_genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stat_mail_by_genders
    **/
    _count?: true | Stat_mail_by_genderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stat_mail_by_genderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stat_mail_by_genderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stat_mail_by_genderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stat_mail_by_genderMaxAggregateInputType
  }

  export type GetStat_mail_by_genderAggregateType<T extends Stat_mail_by_genderAggregateArgs> = {
        [P in keyof T & keyof AggregateStat_mail_by_gender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStat_mail_by_gender[P]>
      : GetScalarType<T[P], AggregateStat_mail_by_gender[P]>
  }




  export type stat_mail_by_genderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stat_mail_by_genderWhereInput
    orderBy?: stat_mail_by_genderOrderByWithAggregationInput | stat_mail_by_genderOrderByWithAggregationInput[]
    by: Stat_mail_by_genderScalarFieldEnum[] | Stat_mail_by_genderScalarFieldEnum
    having?: stat_mail_by_genderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stat_mail_by_genderCountAggregateInputType | true
    _avg?: Stat_mail_by_genderAvgAggregateInputType
    _sum?: Stat_mail_by_genderSumAggregateInputType
    _min?: Stat_mail_by_genderMinAggregateInputType
    _max?: Stat_mail_by_genderMaxAggregateInputType
  }

  export type Stat_mail_by_genderGroupByOutputType = {
    stat_date: Date
    gender: $Enums.GenderStat
    mail_count: number
    _count: Stat_mail_by_genderCountAggregateOutputType | null
    _avg: Stat_mail_by_genderAvgAggregateOutputType | null
    _sum: Stat_mail_by_genderSumAggregateOutputType | null
    _min: Stat_mail_by_genderMinAggregateOutputType | null
    _max: Stat_mail_by_genderMaxAggregateOutputType | null
  }

  type GetStat_mail_by_genderGroupByPayload<T extends stat_mail_by_genderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stat_mail_by_genderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stat_mail_by_genderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stat_mail_by_genderGroupByOutputType[P]>
            : GetScalarType<T[P], Stat_mail_by_genderGroupByOutputType[P]>
        }
      >
    >


  export type stat_mail_by_genderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stat_date?: boolean
    gender?: boolean
    mail_count?: boolean
  }, ExtArgs["result"]["stat_mail_by_gender"]>



  export type stat_mail_by_genderSelectScalar = {
    stat_date?: boolean
    gender?: boolean
    mail_count?: boolean
  }

  export type stat_mail_by_genderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stat_date" | "gender" | "mail_count", ExtArgs["result"]["stat_mail_by_gender"]>

  export type $stat_mail_by_genderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stat_mail_by_gender"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      stat_date: Date
      gender: $Enums.GenderStat
      mail_count: number
    }, ExtArgs["result"]["stat_mail_by_gender"]>
    composites: {}
  }

  type stat_mail_by_genderGetPayload<S extends boolean | null | undefined | stat_mail_by_genderDefaultArgs> = $Result.GetResult<Prisma.$stat_mail_by_genderPayload, S>

  type stat_mail_by_genderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stat_mail_by_genderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stat_mail_by_genderCountAggregateInputType | true
    }

  export interface stat_mail_by_genderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stat_mail_by_gender'], meta: { name: 'stat_mail_by_gender' } }
    /**
     * Find zero or one Stat_mail_by_gender that matches the filter.
     * @param {stat_mail_by_genderFindUniqueArgs} args - Arguments to find a Stat_mail_by_gender
     * @example
     * // Get one Stat_mail_by_gender
     * const stat_mail_by_gender = await prisma.stat_mail_by_gender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stat_mail_by_genderFindUniqueArgs>(args: SelectSubset<T, stat_mail_by_genderFindUniqueArgs<ExtArgs>>): Prisma__stat_mail_by_genderClient<$Result.GetResult<Prisma.$stat_mail_by_genderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stat_mail_by_gender that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stat_mail_by_genderFindUniqueOrThrowArgs} args - Arguments to find a Stat_mail_by_gender
     * @example
     * // Get one Stat_mail_by_gender
     * const stat_mail_by_gender = await prisma.stat_mail_by_gender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stat_mail_by_genderFindUniqueOrThrowArgs>(args: SelectSubset<T, stat_mail_by_genderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stat_mail_by_genderClient<$Result.GetResult<Prisma.$stat_mail_by_genderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stat_mail_by_gender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_genderFindFirstArgs} args - Arguments to find a Stat_mail_by_gender
     * @example
     * // Get one Stat_mail_by_gender
     * const stat_mail_by_gender = await prisma.stat_mail_by_gender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stat_mail_by_genderFindFirstArgs>(args?: SelectSubset<T, stat_mail_by_genderFindFirstArgs<ExtArgs>>): Prisma__stat_mail_by_genderClient<$Result.GetResult<Prisma.$stat_mail_by_genderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stat_mail_by_gender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_genderFindFirstOrThrowArgs} args - Arguments to find a Stat_mail_by_gender
     * @example
     * // Get one Stat_mail_by_gender
     * const stat_mail_by_gender = await prisma.stat_mail_by_gender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stat_mail_by_genderFindFirstOrThrowArgs>(args?: SelectSubset<T, stat_mail_by_genderFindFirstOrThrowArgs<ExtArgs>>): Prisma__stat_mail_by_genderClient<$Result.GetResult<Prisma.$stat_mail_by_genderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stat_mail_by_genders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_genderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stat_mail_by_genders
     * const stat_mail_by_genders = await prisma.stat_mail_by_gender.findMany()
     * 
     * // Get first 10 Stat_mail_by_genders
     * const stat_mail_by_genders = await prisma.stat_mail_by_gender.findMany({ take: 10 })
     * 
     * // Only select the `stat_date`
     * const stat_mail_by_genderWithStat_dateOnly = await prisma.stat_mail_by_gender.findMany({ select: { stat_date: true } })
     * 
     */
    findMany<T extends stat_mail_by_genderFindManyArgs>(args?: SelectSubset<T, stat_mail_by_genderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stat_mail_by_genderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stat_mail_by_gender.
     * @param {stat_mail_by_genderCreateArgs} args - Arguments to create a Stat_mail_by_gender.
     * @example
     * // Create one Stat_mail_by_gender
     * const Stat_mail_by_gender = await prisma.stat_mail_by_gender.create({
     *   data: {
     *     // ... data to create a Stat_mail_by_gender
     *   }
     * })
     * 
     */
    create<T extends stat_mail_by_genderCreateArgs>(args: SelectSubset<T, stat_mail_by_genderCreateArgs<ExtArgs>>): Prisma__stat_mail_by_genderClient<$Result.GetResult<Prisma.$stat_mail_by_genderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stat_mail_by_genders.
     * @param {stat_mail_by_genderCreateManyArgs} args - Arguments to create many Stat_mail_by_genders.
     * @example
     * // Create many Stat_mail_by_genders
     * const stat_mail_by_gender = await prisma.stat_mail_by_gender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stat_mail_by_genderCreateManyArgs>(args?: SelectSubset<T, stat_mail_by_genderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stat_mail_by_gender.
     * @param {stat_mail_by_genderDeleteArgs} args - Arguments to delete one Stat_mail_by_gender.
     * @example
     * // Delete one Stat_mail_by_gender
     * const Stat_mail_by_gender = await prisma.stat_mail_by_gender.delete({
     *   where: {
     *     // ... filter to delete one Stat_mail_by_gender
     *   }
     * })
     * 
     */
    delete<T extends stat_mail_by_genderDeleteArgs>(args: SelectSubset<T, stat_mail_by_genderDeleteArgs<ExtArgs>>): Prisma__stat_mail_by_genderClient<$Result.GetResult<Prisma.$stat_mail_by_genderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stat_mail_by_gender.
     * @param {stat_mail_by_genderUpdateArgs} args - Arguments to update one Stat_mail_by_gender.
     * @example
     * // Update one Stat_mail_by_gender
     * const stat_mail_by_gender = await prisma.stat_mail_by_gender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stat_mail_by_genderUpdateArgs>(args: SelectSubset<T, stat_mail_by_genderUpdateArgs<ExtArgs>>): Prisma__stat_mail_by_genderClient<$Result.GetResult<Prisma.$stat_mail_by_genderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stat_mail_by_genders.
     * @param {stat_mail_by_genderDeleteManyArgs} args - Arguments to filter Stat_mail_by_genders to delete.
     * @example
     * // Delete a few Stat_mail_by_genders
     * const { count } = await prisma.stat_mail_by_gender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stat_mail_by_genderDeleteManyArgs>(args?: SelectSubset<T, stat_mail_by_genderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stat_mail_by_genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_genderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stat_mail_by_genders
     * const stat_mail_by_gender = await prisma.stat_mail_by_gender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stat_mail_by_genderUpdateManyArgs>(args: SelectSubset<T, stat_mail_by_genderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stat_mail_by_gender.
     * @param {stat_mail_by_genderUpsertArgs} args - Arguments to update or create a Stat_mail_by_gender.
     * @example
     * // Update or create a Stat_mail_by_gender
     * const stat_mail_by_gender = await prisma.stat_mail_by_gender.upsert({
     *   create: {
     *     // ... data to create a Stat_mail_by_gender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stat_mail_by_gender we want to update
     *   }
     * })
     */
    upsert<T extends stat_mail_by_genderUpsertArgs>(args: SelectSubset<T, stat_mail_by_genderUpsertArgs<ExtArgs>>): Prisma__stat_mail_by_genderClient<$Result.GetResult<Prisma.$stat_mail_by_genderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stat_mail_by_genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_genderCountArgs} args - Arguments to filter Stat_mail_by_genders to count.
     * @example
     * // Count the number of Stat_mail_by_genders
     * const count = await prisma.stat_mail_by_gender.count({
     *   where: {
     *     // ... the filter for the Stat_mail_by_genders we want to count
     *   }
     * })
    **/
    count<T extends stat_mail_by_genderCountArgs>(
      args?: Subset<T, stat_mail_by_genderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stat_mail_by_genderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stat_mail_by_gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stat_mail_by_genderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stat_mail_by_genderAggregateArgs>(args: Subset<T, Stat_mail_by_genderAggregateArgs>): Prisma.PrismaPromise<GetStat_mail_by_genderAggregateType<T>>

    /**
     * Group by Stat_mail_by_gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_genderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stat_mail_by_genderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stat_mail_by_genderGroupByArgs['orderBy'] }
        : { orderBy?: stat_mail_by_genderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stat_mail_by_genderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStat_mail_by_genderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stat_mail_by_gender model
   */
  readonly fields: stat_mail_by_genderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stat_mail_by_gender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stat_mail_by_genderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stat_mail_by_gender model
   */
  interface stat_mail_by_genderFieldRefs {
    readonly stat_date: FieldRef<"stat_mail_by_gender", 'DateTime'>
    readonly gender: FieldRef<"stat_mail_by_gender", 'GenderStat'>
    readonly mail_count: FieldRef<"stat_mail_by_gender", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * stat_mail_by_gender findUnique
   */
  export type stat_mail_by_genderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_gender to fetch.
     */
    where: stat_mail_by_genderWhereUniqueInput
  }

  /**
   * stat_mail_by_gender findUniqueOrThrow
   */
  export type stat_mail_by_genderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_gender to fetch.
     */
    where: stat_mail_by_genderWhereUniqueInput
  }

  /**
   * stat_mail_by_gender findFirst
   */
  export type stat_mail_by_genderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_gender to fetch.
     */
    where?: stat_mail_by_genderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_mail_by_genders to fetch.
     */
    orderBy?: stat_mail_by_genderOrderByWithRelationInput | stat_mail_by_genderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stat_mail_by_genders.
     */
    cursor?: stat_mail_by_genderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_mail_by_genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_mail_by_genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stat_mail_by_genders.
     */
    distinct?: Stat_mail_by_genderScalarFieldEnum | Stat_mail_by_genderScalarFieldEnum[]
  }

  /**
   * stat_mail_by_gender findFirstOrThrow
   */
  export type stat_mail_by_genderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_gender to fetch.
     */
    where?: stat_mail_by_genderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_mail_by_genders to fetch.
     */
    orderBy?: stat_mail_by_genderOrderByWithRelationInput | stat_mail_by_genderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stat_mail_by_genders.
     */
    cursor?: stat_mail_by_genderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_mail_by_genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_mail_by_genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stat_mail_by_genders.
     */
    distinct?: Stat_mail_by_genderScalarFieldEnum | Stat_mail_by_genderScalarFieldEnum[]
  }

  /**
   * stat_mail_by_gender findMany
   */
  export type stat_mail_by_genderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_genders to fetch.
     */
    where?: stat_mail_by_genderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_mail_by_genders to fetch.
     */
    orderBy?: stat_mail_by_genderOrderByWithRelationInput | stat_mail_by_genderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stat_mail_by_genders.
     */
    cursor?: stat_mail_by_genderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_mail_by_genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_mail_by_genders.
     */
    skip?: number
    distinct?: Stat_mail_by_genderScalarFieldEnum | Stat_mail_by_genderScalarFieldEnum[]
  }

  /**
   * stat_mail_by_gender create
   */
  export type stat_mail_by_genderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
    /**
     * The data needed to create a stat_mail_by_gender.
     */
    data: XOR<stat_mail_by_genderCreateInput, stat_mail_by_genderUncheckedCreateInput>
  }

  /**
   * stat_mail_by_gender createMany
   */
  export type stat_mail_by_genderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stat_mail_by_genders.
     */
    data: stat_mail_by_genderCreateManyInput | stat_mail_by_genderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stat_mail_by_gender update
   */
  export type stat_mail_by_genderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
    /**
     * The data needed to update a stat_mail_by_gender.
     */
    data: XOR<stat_mail_by_genderUpdateInput, stat_mail_by_genderUncheckedUpdateInput>
    /**
     * Choose, which stat_mail_by_gender to update.
     */
    where: stat_mail_by_genderWhereUniqueInput
  }

  /**
   * stat_mail_by_gender updateMany
   */
  export type stat_mail_by_genderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stat_mail_by_genders.
     */
    data: XOR<stat_mail_by_genderUpdateManyMutationInput, stat_mail_by_genderUncheckedUpdateManyInput>
    /**
     * Filter which stat_mail_by_genders to update
     */
    where?: stat_mail_by_genderWhereInput
    /**
     * Limit how many stat_mail_by_genders to update.
     */
    limit?: number
  }

  /**
   * stat_mail_by_gender upsert
   */
  export type stat_mail_by_genderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
    /**
     * The filter to search for the stat_mail_by_gender to update in case it exists.
     */
    where: stat_mail_by_genderWhereUniqueInput
    /**
     * In case the stat_mail_by_gender found by the `where` argument doesn't exist, create a new stat_mail_by_gender with this data.
     */
    create: XOR<stat_mail_by_genderCreateInput, stat_mail_by_genderUncheckedCreateInput>
    /**
     * In case the stat_mail_by_gender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stat_mail_by_genderUpdateInput, stat_mail_by_genderUncheckedUpdateInput>
  }

  /**
   * stat_mail_by_gender delete
   */
  export type stat_mail_by_genderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
    /**
     * Filter which stat_mail_by_gender to delete.
     */
    where: stat_mail_by_genderWhereUniqueInput
  }

  /**
   * stat_mail_by_gender deleteMany
   */
  export type stat_mail_by_genderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stat_mail_by_genders to delete
     */
    where?: stat_mail_by_genderWhereInput
    /**
     * Limit how many stat_mail_by_genders to delete.
     */
    limit?: number
  }

  /**
   * stat_mail_by_gender without action
   */
  export type stat_mail_by_genderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_gender
     */
    select?: stat_mail_by_genderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_gender
     */
    omit?: stat_mail_by_genderOmit<ExtArgs> | null
  }


  /**
   * Model stat_mail_by_priority
   */

  export type AggregateStat_mail_by_priority = {
    _count: Stat_mail_by_priorityCountAggregateOutputType | null
    _avg: Stat_mail_by_priorityAvgAggregateOutputType | null
    _sum: Stat_mail_by_prioritySumAggregateOutputType | null
    _min: Stat_mail_by_priorityMinAggregateOutputType | null
    _max: Stat_mail_by_priorityMaxAggregateOutputType | null
  }

  export type Stat_mail_by_priorityAvgAggregateOutputType = {
    priority_id: number | null
    mail_count: number | null
  }

  export type Stat_mail_by_prioritySumAggregateOutputType = {
    priority_id: number | null
    mail_count: number | null
  }

  export type Stat_mail_by_priorityMinAggregateOutputType = {
    stat_date: Date | null
    priority_id: number | null
    mail_count: number | null
  }

  export type Stat_mail_by_priorityMaxAggregateOutputType = {
    stat_date: Date | null
    priority_id: number | null
    mail_count: number | null
  }

  export type Stat_mail_by_priorityCountAggregateOutputType = {
    stat_date: number
    priority_id: number
    mail_count: number
    _all: number
  }


  export type Stat_mail_by_priorityAvgAggregateInputType = {
    priority_id?: true
    mail_count?: true
  }

  export type Stat_mail_by_prioritySumAggregateInputType = {
    priority_id?: true
    mail_count?: true
  }

  export type Stat_mail_by_priorityMinAggregateInputType = {
    stat_date?: true
    priority_id?: true
    mail_count?: true
  }

  export type Stat_mail_by_priorityMaxAggregateInputType = {
    stat_date?: true
    priority_id?: true
    mail_count?: true
  }

  export type Stat_mail_by_priorityCountAggregateInputType = {
    stat_date?: true
    priority_id?: true
    mail_count?: true
    _all?: true
  }

  export type Stat_mail_by_priorityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stat_mail_by_priority to aggregate.
     */
    where?: stat_mail_by_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_mail_by_priorities to fetch.
     */
    orderBy?: stat_mail_by_priorityOrderByWithRelationInput | stat_mail_by_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stat_mail_by_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_mail_by_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_mail_by_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stat_mail_by_priorities
    **/
    _count?: true | Stat_mail_by_priorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stat_mail_by_priorityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stat_mail_by_prioritySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stat_mail_by_priorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stat_mail_by_priorityMaxAggregateInputType
  }

  export type GetStat_mail_by_priorityAggregateType<T extends Stat_mail_by_priorityAggregateArgs> = {
        [P in keyof T & keyof AggregateStat_mail_by_priority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStat_mail_by_priority[P]>
      : GetScalarType<T[P], AggregateStat_mail_by_priority[P]>
  }




  export type stat_mail_by_priorityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stat_mail_by_priorityWhereInput
    orderBy?: stat_mail_by_priorityOrderByWithAggregationInput | stat_mail_by_priorityOrderByWithAggregationInput[]
    by: Stat_mail_by_priorityScalarFieldEnum[] | Stat_mail_by_priorityScalarFieldEnum
    having?: stat_mail_by_priorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stat_mail_by_priorityCountAggregateInputType | true
    _avg?: Stat_mail_by_priorityAvgAggregateInputType
    _sum?: Stat_mail_by_prioritySumAggregateInputType
    _min?: Stat_mail_by_priorityMinAggregateInputType
    _max?: Stat_mail_by_priorityMaxAggregateInputType
  }

  export type Stat_mail_by_priorityGroupByOutputType = {
    stat_date: Date
    priority_id: number
    mail_count: number
    _count: Stat_mail_by_priorityCountAggregateOutputType | null
    _avg: Stat_mail_by_priorityAvgAggregateOutputType | null
    _sum: Stat_mail_by_prioritySumAggregateOutputType | null
    _min: Stat_mail_by_priorityMinAggregateOutputType | null
    _max: Stat_mail_by_priorityMaxAggregateOutputType | null
  }

  type GetStat_mail_by_priorityGroupByPayload<T extends stat_mail_by_priorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stat_mail_by_priorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stat_mail_by_priorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stat_mail_by_priorityGroupByOutputType[P]>
            : GetScalarType<T[P], Stat_mail_by_priorityGroupByOutputType[P]>
        }
      >
    >


  export type stat_mail_by_prioritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stat_date?: boolean
    priority_id?: boolean
    mail_count?: boolean
  }, ExtArgs["result"]["stat_mail_by_priority"]>



  export type stat_mail_by_prioritySelectScalar = {
    stat_date?: boolean
    priority_id?: boolean
    mail_count?: boolean
  }

  export type stat_mail_by_priorityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stat_date" | "priority_id" | "mail_count", ExtArgs["result"]["stat_mail_by_priority"]>

  export type $stat_mail_by_priorityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stat_mail_by_priority"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      stat_date: Date
      priority_id: number
      mail_count: number
    }, ExtArgs["result"]["stat_mail_by_priority"]>
    composites: {}
  }

  type stat_mail_by_priorityGetPayload<S extends boolean | null | undefined | stat_mail_by_priorityDefaultArgs> = $Result.GetResult<Prisma.$stat_mail_by_priorityPayload, S>

  type stat_mail_by_priorityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stat_mail_by_priorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stat_mail_by_priorityCountAggregateInputType | true
    }

  export interface stat_mail_by_priorityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stat_mail_by_priority'], meta: { name: 'stat_mail_by_priority' } }
    /**
     * Find zero or one Stat_mail_by_priority that matches the filter.
     * @param {stat_mail_by_priorityFindUniqueArgs} args - Arguments to find a Stat_mail_by_priority
     * @example
     * // Get one Stat_mail_by_priority
     * const stat_mail_by_priority = await prisma.stat_mail_by_priority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stat_mail_by_priorityFindUniqueArgs>(args: SelectSubset<T, stat_mail_by_priorityFindUniqueArgs<ExtArgs>>): Prisma__stat_mail_by_priorityClient<$Result.GetResult<Prisma.$stat_mail_by_priorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stat_mail_by_priority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stat_mail_by_priorityFindUniqueOrThrowArgs} args - Arguments to find a Stat_mail_by_priority
     * @example
     * // Get one Stat_mail_by_priority
     * const stat_mail_by_priority = await prisma.stat_mail_by_priority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stat_mail_by_priorityFindUniqueOrThrowArgs>(args: SelectSubset<T, stat_mail_by_priorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stat_mail_by_priorityClient<$Result.GetResult<Prisma.$stat_mail_by_priorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stat_mail_by_priority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_priorityFindFirstArgs} args - Arguments to find a Stat_mail_by_priority
     * @example
     * // Get one Stat_mail_by_priority
     * const stat_mail_by_priority = await prisma.stat_mail_by_priority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stat_mail_by_priorityFindFirstArgs>(args?: SelectSubset<T, stat_mail_by_priorityFindFirstArgs<ExtArgs>>): Prisma__stat_mail_by_priorityClient<$Result.GetResult<Prisma.$stat_mail_by_priorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stat_mail_by_priority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_priorityFindFirstOrThrowArgs} args - Arguments to find a Stat_mail_by_priority
     * @example
     * // Get one Stat_mail_by_priority
     * const stat_mail_by_priority = await prisma.stat_mail_by_priority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stat_mail_by_priorityFindFirstOrThrowArgs>(args?: SelectSubset<T, stat_mail_by_priorityFindFirstOrThrowArgs<ExtArgs>>): Prisma__stat_mail_by_priorityClient<$Result.GetResult<Prisma.$stat_mail_by_priorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stat_mail_by_priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_priorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stat_mail_by_priorities
     * const stat_mail_by_priorities = await prisma.stat_mail_by_priority.findMany()
     * 
     * // Get first 10 Stat_mail_by_priorities
     * const stat_mail_by_priorities = await prisma.stat_mail_by_priority.findMany({ take: 10 })
     * 
     * // Only select the `stat_date`
     * const stat_mail_by_priorityWithStat_dateOnly = await prisma.stat_mail_by_priority.findMany({ select: { stat_date: true } })
     * 
     */
    findMany<T extends stat_mail_by_priorityFindManyArgs>(args?: SelectSubset<T, stat_mail_by_priorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stat_mail_by_priorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stat_mail_by_priority.
     * @param {stat_mail_by_priorityCreateArgs} args - Arguments to create a Stat_mail_by_priority.
     * @example
     * // Create one Stat_mail_by_priority
     * const Stat_mail_by_priority = await prisma.stat_mail_by_priority.create({
     *   data: {
     *     // ... data to create a Stat_mail_by_priority
     *   }
     * })
     * 
     */
    create<T extends stat_mail_by_priorityCreateArgs>(args: SelectSubset<T, stat_mail_by_priorityCreateArgs<ExtArgs>>): Prisma__stat_mail_by_priorityClient<$Result.GetResult<Prisma.$stat_mail_by_priorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stat_mail_by_priorities.
     * @param {stat_mail_by_priorityCreateManyArgs} args - Arguments to create many Stat_mail_by_priorities.
     * @example
     * // Create many Stat_mail_by_priorities
     * const stat_mail_by_priority = await prisma.stat_mail_by_priority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stat_mail_by_priorityCreateManyArgs>(args?: SelectSubset<T, stat_mail_by_priorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stat_mail_by_priority.
     * @param {stat_mail_by_priorityDeleteArgs} args - Arguments to delete one Stat_mail_by_priority.
     * @example
     * // Delete one Stat_mail_by_priority
     * const Stat_mail_by_priority = await prisma.stat_mail_by_priority.delete({
     *   where: {
     *     // ... filter to delete one Stat_mail_by_priority
     *   }
     * })
     * 
     */
    delete<T extends stat_mail_by_priorityDeleteArgs>(args: SelectSubset<T, stat_mail_by_priorityDeleteArgs<ExtArgs>>): Prisma__stat_mail_by_priorityClient<$Result.GetResult<Prisma.$stat_mail_by_priorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stat_mail_by_priority.
     * @param {stat_mail_by_priorityUpdateArgs} args - Arguments to update one Stat_mail_by_priority.
     * @example
     * // Update one Stat_mail_by_priority
     * const stat_mail_by_priority = await prisma.stat_mail_by_priority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stat_mail_by_priorityUpdateArgs>(args: SelectSubset<T, stat_mail_by_priorityUpdateArgs<ExtArgs>>): Prisma__stat_mail_by_priorityClient<$Result.GetResult<Prisma.$stat_mail_by_priorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stat_mail_by_priorities.
     * @param {stat_mail_by_priorityDeleteManyArgs} args - Arguments to filter Stat_mail_by_priorities to delete.
     * @example
     * // Delete a few Stat_mail_by_priorities
     * const { count } = await prisma.stat_mail_by_priority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stat_mail_by_priorityDeleteManyArgs>(args?: SelectSubset<T, stat_mail_by_priorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stat_mail_by_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_priorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stat_mail_by_priorities
     * const stat_mail_by_priority = await prisma.stat_mail_by_priority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stat_mail_by_priorityUpdateManyArgs>(args: SelectSubset<T, stat_mail_by_priorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stat_mail_by_priority.
     * @param {stat_mail_by_priorityUpsertArgs} args - Arguments to update or create a Stat_mail_by_priority.
     * @example
     * // Update or create a Stat_mail_by_priority
     * const stat_mail_by_priority = await prisma.stat_mail_by_priority.upsert({
     *   create: {
     *     // ... data to create a Stat_mail_by_priority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stat_mail_by_priority we want to update
     *   }
     * })
     */
    upsert<T extends stat_mail_by_priorityUpsertArgs>(args: SelectSubset<T, stat_mail_by_priorityUpsertArgs<ExtArgs>>): Prisma__stat_mail_by_priorityClient<$Result.GetResult<Prisma.$stat_mail_by_priorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stat_mail_by_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_priorityCountArgs} args - Arguments to filter Stat_mail_by_priorities to count.
     * @example
     * // Count the number of Stat_mail_by_priorities
     * const count = await prisma.stat_mail_by_priority.count({
     *   where: {
     *     // ... the filter for the Stat_mail_by_priorities we want to count
     *   }
     * })
    **/
    count<T extends stat_mail_by_priorityCountArgs>(
      args?: Subset<T, stat_mail_by_priorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stat_mail_by_priorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stat_mail_by_priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stat_mail_by_priorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stat_mail_by_priorityAggregateArgs>(args: Subset<T, Stat_mail_by_priorityAggregateArgs>): Prisma.PrismaPromise<GetStat_mail_by_priorityAggregateType<T>>

    /**
     * Group by Stat_mail_by_priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_mail_by_priorityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stat_mail_by_priorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stat_mail_by_priorityGroupByArgs['orderBy'] }
        : { orderBy?: stat_mail_by_priorityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stat_mail_by_priorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStat_mail_by_priorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stat_mail_by_priority model
   */
  readonly fields: stat_mail_by_priorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stat_mail_by_priority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stat_mail_by_priorityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stat_mail_by_priority model
   */
  interface stat_mail_by_priorityFieldRefs {
    readonly stat_date: FieldRef<"stat_mail_by_priority", 'DateTime'>
    readonly priority_id: FieldRef<"stat_mail_by_priority", 'Int'>
    readonly mail_count: FieldRef<"stat_mail_by_priority", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * stat_mail_by_priority findUnique
   */
  export type stat_mail_by_priorityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_priority to fetch.
     */
    where: stat_mail_by_priorityWhereUniqueInput
  }

  /**
   * stat_mail_by_priority findUniqueOrThrow
   */
  export type stat_mail_by_priorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_priority to fetch.
     */
    where: stat_mail_by_priorityWhereUniqueInput
  }

  /**
   * stat_mail_by_priority findFirst
   */
  export type stat_mail_by_priorityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_priority to fetch.
     */
    where?: stat_mail_by_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_mail_by_priorities to fetch.
     */
    orderBy?: stat_mail_by_priorityOrderByWithRelationInput | stat_mail_by_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stat_mail_by_priorities.
     */
    cursor?: stat_mail_by_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_mail_by_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_mail_by_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stat_mail_by_priorities.
     */
    distinct?: Stat_mail_by_priorityScalarFieldEnum | Stat_mail_by_priorityScalarFieldEnum[]
  }

  /**
   * stat_mail_by_priority findFirstOrThrow
   */
  export type stat_mail_by_priorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_priority to fetch.
     */
    where?: stat_mail_by_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_mail_by_priorities to fetch.
     */
    orderBy?: stat_mail_by_priorityOrderByWithRelationInput | stat_mail_by_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stat_mail_by_priorities.
     */
    cursor?: stat_mail_by_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_mail_by_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_mail_by_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stat_mail_by_priorities.
     */
    distinct?: Stat_mail_by_priorityScalarFieldEnum | Stat_mail_by_priorityScalarFieldEnum[]
  }

  /**
   * stat_mail_by_priority findMany
   */
  export type stat_mail_by_priorityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
    /**
     * Filter, which stat_mail_by_priorities to fetch.
     */
    where?: stat_mail_by_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_mail_by_priorities to fetch.
     */
    orderBy?: stat_mail_by_priorityOrderByWithRelationInput | stat_mail_by_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stat_mail_by_priorities.
     */
    cursor?: stat_mail_by_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_mail_by_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_mail_by_priorities.
     */
    skip?: number
    distinct?: Stat_mail_by_priorityScalarFieldEnum | Stat_mail_by_priorityScalarFieldEnum[]
  }

  /**
   * stat_mail_by_priority create
   */
  export type stat_mail_by_priorityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
    /**
     * The data needed to create a stat_mail_by_priority.
     */
    data: XOR<stat_mail_by_priorityCreateInput, stat_mail_by_priorityUncheckedCreateInput>
  }

  /**
   * stat_mail_by_priority createMany
   */
  export type stat_mail_by_priorityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stat_mail_by_priorities.
     */
    data: stat_mail_by_priorityCreateManyInput | stat_mail_by_priorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stat_mail_by_priority update
   */
  export type stat_mail_by_priorityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
    /**
     * The data needed to update a stat_mail_by_priority.
     */
    data: XOR<stat_mail_by_priorityUpdateInput, stat_mail_by_priorityUncheckedUpdateInput>
    /**
     * Choose, which stat_mail_by_priority to update.
     */
    where: stat_mail_by_priorityWhereUniqueInput
  }

  /**
   * stat_mail_by_priority updateMany
   */
  export type stat_mail_by_priorityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stat_mail_by_priorities.
     */
    data: XOR<stat_mail_by_priorityUpdateManyMutationInput, stat_mail_by_priorityUncheckedUpdateManyInput>
    /**
     * Filter which stat_mail_by_priorities to update
     */
    where?: stat_mail_by_priorityWhereInput
    /**
     * Limit how many stat_mail_by_priorities to update.
     */
    limit?: number
  }

  /**
   * stat_mail_by_priority upsert
   */
  export type stat_mail_by_priorityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
    /**
     * The filter to search for the stat_mail_by_priority to update in case it exists.
     */
    where: stat_mail_by_priorityWhereUniqueInput
    /**
     * In case the stat_mail_by_priority found by the `where` argument doesn't exist, create a new stat_mail_by_priority with this data.
     */
    create: XOR<stat_mail_by_priorityCreateInput, stat_mail_by_priorityUncheckedCreateInput>
    /**
     * In case the stat_mail_by_priority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stat_mail_by_priorityUpdateInput, stat_mail_by_priorityUncheckedUpdateInput>
  }

  /**
   * stat_mail_by_priority delete
   */
  export type stat_mail_by_priorityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
    /**
     * Filter which stat_mail_by_priority to delete.
     */
    where: stat_mail_by_priorityWhereUniqueInput
  }

  /**
   * stat_mail_by_priority deleteMany
   */
  export type stat_mail_by_priorityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stat_mail_by_priorities to delete
     */
    where?: stat_mail_by_priorityWhereInput
    /**
     * Limit how many stat_mail_by_priorities to delete.
     */
    limit?: number
  }

  /**
   * stat_mail_by_priority without action
   */
  export type stat_mail_by_priorityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_mail_by_priority
     */
    select?: stat_mail_by_prioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_mail_by_priority
     */
    omit?: stat_mail_by_priorityOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DepartementsScalarFieldEnum: {
    id: 'id',
    nom_departement: 'nom_departement'
  };

  export type DepartementsScalarFieldEnum = (typeof DepartementsScalarFieldEnum)[keyof typeof DepartementsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    nom_categorie: 'nom_categorie'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PrivacyScalarFieldEnum: {
    id: 'id',
    niveau_confidentialite: 'niveau_confidentialite'
  };

  export type PrivacyScalarFieldEnum = (typeof PrivacyScalarFieldEnum)[keyof typeof PrivacyScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    nom_complet: 'nom_complet',
    adresse_mail: 'adresse_mail',
    statut_hierarchique: 'statut_hierarchique',
    departement_id: 'departement_id',
    est_marie: 'est_marie',
    nombre_enfants: 'nombre_enfants',
    genre: 'genre'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password_hash: 'password_hash',
    role: 'role',
    staff_id: 'staff_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MailScalarFieldEnum: {
    id: 'id',
    objet: 'objet',
    contenu: 'contenu',
    date_reception: 'date_reception',
    expediteur_staff_id: 'expediteur_staff_id',
    categorie_id: 'categorie_id',
    privacy_id: 'privacy_id',
    handler_user_id: 'handler_user_id'
  };

  export type MailScalarFieldEnum = (typeof MailScalarFieldEnum)[keyof typeof MailScalarFieldEnum]


  export const TachesScalarFieldEnum: {
    id: 'id',
    mail_id: 'mail_id',
    agent_user_id: 'agent_user_id',
    statut_tache: 'statut_tache',
    priorite_calculee: 'priorite_calculee',
    date_attribution: 'date_attribution',
    commentaire: 'commentaire'
  };

  export type TachesScalarFieldEnum = (typeof TachesScalarFieldEnum)[keyof typeof TachesScalarFieldEnum]


  export const Stats_gender_mail_countScalarFieldEnum: {
    id: 'id',
    genre: 'genre',
    mail_count: 'mail_count'
  };

  export type Stats_gender_mail_countScalarFieldEnum = (typeof Stats_gender_mail_countScalarFieldEnum)[keyof typeof Stats_gender_mail_countScalarFieldEnum]


  export const Stat_mail_by_genderScalarFieldEnum: {
    stat_date: 'stat_date',
    gender: 'gender',
    mail_count: 'mail_count'
  };

  export type Stat_mail_by_genderScalarFieldEnum = (typeof Stat_mail_by_genderScalarFieldEnum)[keyof typeof Stat_mail_by_genderScalarFieldEnum]


  export const Stat_mail_by_priorityScalarFieldEnum: {
    stat_date: 'stat_date',
    priority_id: 'priority_id',
    mail_count: 'mail_count'
  };

  export type Stat_mail_by_priorityScalarFieldEnum = (typeof Stat_mail_by_priorityScalarFieldEnum)[keyof typeof Stat_mail_by_priorityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const departementsOrderByRelevanceFieldEnum: {
    nom_departement: 'nom_departement'
  };

  export type departementsOrderByRelevanceFieldEnum = (typeof departementsOrderByRelevanceFieldEnum)[keyof typeof departementsOrderByRelevanceFieldEnum]


  export const categoryOrderByRelevanceFieldEnum: {
    nom_categorie: 'nom_categorie'
  };

  export type categoryOrderByRelevanceFieldEnum = (typeof categoryOrderByRelevanceFieldEnum)[keyof typeof categoryOrderByRelevanceFieldEnum]


  export const privacyOrderByRelevanceFieldEnum: {
    niveau_confidentialite: 'niveau_confidentialite'
  };

  export type privacyOrderByRelevanceFieldEnum = (typeof privacyOrderByRelevanceFieldEnum)[keyof typeof privacyOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const staffOrderByRelevanceFieldEnum: {
    nom_complet: 'nom_complet',
    adresse_mail: 'adresse_mail'
  };

  export type staffOrderByRelevanceFieldEnum = (typeof staffOrderByRelevanceFieldEnum)[keyof typeof staffOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    password_hash: 'password_hash'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const mailOrderByRelevanceFieldEnum: {
    objet: 'objet',
    contenu: 'contenu'
  };

  export type mailOrderByRelevanceFieldEnum = (typeof mailOrderByRelevanceFieldEnum)[keyof typeof mailOrderByRelevanceFieldEnum]


  export const tachesOrderByRelevanceFieldEnum: {
    commentaire: 'commentaire'
  };

  export type tachesOrderByRelevanceFieldEnum = (typeof tachesOrderByRelevanceFieldEnum)[keyof typeof tachesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'StaffHierarchie'
   */
  export type EnumStaffHierarchieFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffHierarchie'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Genre'
   */
  export type EnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genre'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'MailStatut'
   */
  export type EnumMailStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailStatut'>
    


  /**
   * Reference to a field of type 'MailPriorite'
   */
  export type EnumMailPrioriteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailPriorite'>
    


  /**
   * Reference to a field of type 'GenderStat'
   */
  export type EnumGenderStatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderStat'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type departementsWhereInput = {
    AND?: departementsWhereInput | departementsWhereInput[]
    OR?: departementsWhereInput[]
    NOT?: departementsWhereInput | departementsWhereInput[]
    id?: IntFilter<"departements"> | number
    nom_departement?: StringFilter<"departements"> | string
    staff?: StaffListRelationFilter
  }

  export type departementsOrderByWithRelationInput = {
    id?: SortOrder
    nom_departement?: SortOrder
    staff?: staffOrderByRelationAggregateInput
    _relevance?: departementsOrderByRelevanceInput
  }

  export type departementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom_departement?: string
    AND?: departementsWhereInput | departementsWhereInput[]
    OR?: departementsWhereInput[]
    NOT?: departementsWhereInput | departementsWhereInput[]
    staff?: StaffListRelationFilter
  }, "id" | "nom_departement">

  export type departementsOrderByWithAggregationInput = {
    id?: SortOrder
    nom_departement?: SortOrder
    _count?: departementsCountOrderByAggregateInput
    _avg?: departementsAvgOrderByAggregateInput
    _max?: departementsMaxOrderByAggregateInput
    _min?: departementsMinOrderByAggregateInput
    _sum?: departementsSumOrderByAggregateInput
  }

  export type departementsScalarWhereWithAggregatesInput = {
    AND?: departementsScalarWhereWithAggregatesInput | departementsScalarWhereWithAggregatesInput[]
    OR?: departementsScalarWhereWithAggregatesInput[]
    NOT?: departementsScalarWhereWithAggregatesInput | departementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"departements"> | number
    nom_departement?: StringWithAggregatesFilter<"departements"> | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    nom_categorie?: StringFilter<"category"> | string
    mail?: MailListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
    mail?: mailOrderByRelationAggregateInput
    _relevance?: categoryOrderByRelevanceInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom_categorie?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    mail?: MailListRelationFilter
  }, "id" | "nom_categorie">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    nom_categorie?: StringWithAggregatesFilter<"category"> | string
  }

  export type privacyWhereInput = {
    AND?: privacyWhereInput | privacyWhereInput[]
    OR?: privacyWhereInput[]
    NOT?: privacyWhereInput | privacyWhereInput[]
    id?: IntFilter<"privacy"> | number
    niveau_confidentialite?: StringFilter<"privacy"> | string
    mail?: MailListRelationFilter
  }

  export type privacyOrderByWithRelationInput = {
    id?: SortOrder
    niveau_confidentialite?: SortOrder
    mail?: mailOrderByRelationAggregateInput
    _relevance?: privacyOrderByRelevanceInput
  }

  export type privacyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    niveau_confidentialite?: string
    AND?: privacyWhereInput | privacyWhereInput[]
    OR?: privacyWhereInput[]
    NOT?: privacyWhereInput | privacyWhereInput[]
    mail?: MailListRelationFilter
  }, "id" | "niveau_confidentialite">

  export type privacyOrderByWithAggregationInput = {
    id?: SortOrder
    niveau_confidentialite?: SortOrder
    _count?: privacyCountOrderByAggregateInput
    _avg?: privacyAvgOrderByAggregateInput
    _max?: privacyMaxOrderByAggregateInput
    _min?: privacyMinOrderByAggregateInput
    _sum?: privacySumOrderByAggregateInput
  }

  export type privacyScalarWhereWithAggregatesInput = {
    AND?: privacyScalarWhereWithAggregatesInput | privacyScalarWhereWithAggregatesInput[]
    OR?: privacyScalarWhereWithAggregatesInput[]
    NOT?: privacyScalarWhereWithAggregatesInput | privacyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"privacy"> | number
    niveau_confidentialite?: StringWithAggregatesFilter<"privacy"> | string
  }

  export type staffWhereInput = {
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    id?: IntFilter<"staff"> | number
    nom_complet?: StringFilter<"staff"> | string
    adresse_mail?: StringFilter<"staff"> | string
    statut_hierarchique?: EnumStaffHierarchieFilter<"staff"> | $Enums.StaffHierarchie
    departement_id?: IntNullableFilter<"staff"> | number | null
    est_marie?: BoolFilter<"staff"> | boolean
    nombre_enfants?: IntFilter<"staff"> | number
    genre?: EnumGenreFilter<"staff"> | $Enums.Genre
    departement?: XOR<DepartementsNullableScalarRelationFilter, departementsWhereInput> | null
    mail?: MailListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type staffOrderByWithRelationInput = {
    id?: SortOrder
    nom_complet?: SortOrder
    adresse_mail?: SortOrder
    statut_hierarchique?: SortOrder
    departement_id?: SortOrderInput | SortOrder
    est_marie?: SortOrder
    nombre_enfants?: SortOrder
    genre?: SortOrder
    departement?: departementsOrderByWithRelationInput
    mail?: mailOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    _relevance?: staffOrderByRelevanceInput
  }

  export type staffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    adresse_mail?: string
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    nom_complet?: StringFilter<"staff"> | string
    statut_hierarchique?: EnumStaffHierarchieFilter<"staff"> | $Enums.StaffHierarchie
    departement_id?: IntNullableFilter<"staff"> | number | null
    est_marie?: BoolFilter<"staff"> | boolean
    nombre_enfants?: IntFilter<"staff"> | number
    genre?: EnumGenreFilter<"staff"> | $Enums.Genre
    departement?: XOR<DepartementsNullableScalarRelationFilter, departementsWhereInput> | null
    mail?: MailListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "adresse_mail">

  export type staffOrderByWithAggregationInput = {
    id?: SortOrder
    nom_complet?: SortOrder
    adresse_mail?: SortOrder
    statut_hierarchique?: SortOrder
    departement_id?: SortOrderInput | SortOrder
    est_marie?: SortOrder
    nombre_enfants?: SortOrder
    genre?: SortOrder
    _count?: staffCountOrderByAggregateInput
    _avg?: staffAvgOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
    _sum?: staffSumOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    OR?: staffScalarWhereWithAggregatesInput[]
    NOT?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"staff"> | number
    nom_complet?: StringWithAggregatesFilter<"staff"> | string
    adresse_mail?: StringWithAggregatesFilter<"staff"> | string
    statut_hierarchique?: EnumStaffHierarchieWithAggregatesFilter<"staff"> | $Enums.StaffHierarchie
    departement_id?: IntNullableWithAggregatesFilter<"staff"> | number | null
    est_marie?: BoolWithAggregatesFilter<"staff"> | boolean
    nombre_enfants?: IntWithAggregatesFilter<"staff"> | number
    genre?: EnumGenreWithAggregatesFilter<"staff"> | $Enums.Genre
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: EnumUserRoleFilter<"users"> | $Enums.UserRole
    staff_id?: IntNullableFilter<"users"> | number | null
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    taches?: TachesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    staff_id?: SortOrderInput | SortOrder
    staff?: staffOrderByWithRelationInput
    taches?: tachesOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    staff_id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    role?: EnumUserRoleFilter<"users"> | $Enums.UserRole
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    taches?: TachesListRelationFilter
  }, "id" | "username" | "staff_id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    staff_id?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role?: EnumUserRoleWithAggregatesFilter<"users"> | $Enums.UserRole
    staff_id?: IntNullableWithAggregatesFilter<"users"> | number | null
  }

  export type mailWhereInput = {
    AND?: mailWhereInput | mailWhereInput[]
    OR?: mailWhereInput[]
    NOT?: mailWhereInput | mailWhereInput[]
    id?: IntFilter<"mail"> | number
    objet?: StringFilter<"mail"> | string
    contenu?: StringNullableFilter<"mail"> | string | null
    date_reception?: DateTimeFilter<"mail"> | Date | string
    expediteur_staff_id?: IntNullableFilter<"mail"> | number | null
    categorie_id?: IntNullableFilter<"mail"> | number | null
    privacy_id?: IntNullableFilter<"mail"> | number | null
    handler_user_id?: IntNullableFilter<"mail"> | number | null
    expediteur?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    categorie?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    privacy?: XOR<PrivacyNullableScalarRelationFilter, privacyWhereInput> | null
    taches?: TachesListRelationFilter
  }

  export type mailOrderByWithRelationInput = {
    id?: SortOrder
    objet?: SortOrder
    contenu?: SortOrderInput | SortOrder
    date_reception?: SortOrder
    expediteur_staff_id?: SortOrderInput | SortOrder
    categorie_id?: SortOrderInput | SortOrder
    privacy_id?: SortOrderInput | SortOrder
    handler_user_id?: SortOrderInput | SortOrder
    expediteur?: staffOrderByWithRelationInput
    categorie?: categoryOrderByWithRelationInput
    privacy?: privacyOrderByWithRelationInput
    taches?: tachesOrderByRelationAggregateInput
    _relevance?: mailOrderByRelevanceInput
  }

  export type mailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mailWhereInput | mailWhereInput[]
    OR?: mailWhereInput[]
    NOT?: mailWhereInput | mailWhereInput[]
    objet?: StringFilter<"mail"> | string
    contenu?: StringNullableFilter<"mail"> | string | null
    date_reception?: DateTimeFilter<"mail"> | Date | string
    expediteur_staff_id?: IntNullableFilter<"mail"> | number | null
    categorie_id?: IntNullableFilter<"mail"> | number | null
    privacy_id?: IntNullableFilter<"mail"> | number | null
    handler_user_id?: IntNullableFilter<"mail"> | number | null
    expediteur?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    categorie?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    privacy?: XOR<PrivacyNullableScalarRelationFilter, privacyWhereInput> | null
    taches?: TachesListRelationFilter
  }, "id">

  export type mailOrderByWithAggregationInput = {
    id?: SortOrder
    objet?: SortOrder
    contenu?: SortOrderInput | SortOrder
    date_reception?: SortOrder
    expediteur_staff_id?: SortOrderInput | SortOrder
    categorie_id?: SortOrderInput | SortOrder
    privacy_id?: SortOrderInput | SortOrder
    handler_user_id?: SortOrderInput | SortOrder
    _count?: mailCountOrderByAggregateInput
    _avg?: mailAvgOrderByAggregateInput
    _max?: mailMaxOrderByAggregateInput
    _min?: mailMinOrderByAggregateInput
    _sum?: mailSumOrderByAggregateInput
  }

  export type mailScalarWhereWithAggregatesInput = {
    AND?: mailScalarWhereWithAggregatesInput | mailScalarWhereWithAggregatesInput[]
    OR?: mailScalarWhereWithAggregatesInput[]
    NOT?: mailScalarWhereWithAggregatesInput | mailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mail"> | number
    objet?: StringWithAggregatesFilter<"mail"> | string
    contenu?: StringNullableWithAggregatesFilter<"mail"> | string | null
    date_reception?: DateTimeWithAggregatesFilter<"mail"> | Date | string
    expediteur_staff_id?: IntNullableWithAggregatesFilter<"mail"> | number | null
    categorie_id?: IntNullableWithAggregatesFilter<"mail"> | number | null
    privacy_id?: IntNullableWithAggregatesFilter<"mail"> | number | null
    handler_user_id?: IntNullableWithAggregatesFilter<"mail"> | number | null
  }

  export type tachesWhereInput = {
    AND?: tachesWhereInput | tachesWhereInput[]
    OR?: tachesWhereInput[]
    NOT?: tachesWhereInput | tachesWhereInput[]
    id?: IntFilter<"taches"> | number
    mail_id?: IntFilter<"taches"> | number
    agent_user_id?: IntFilter<"taches"> | number
    statut_tache?: EnumMailStatutFilter<"taches"> | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFilter<"taches"> | $Enums.MailPriorite
    date_attribution?: DateTimeNullableFilter<"taches"> | Date | string | null
    commentaire?: StringNullableFilter<"taches"> | string | null
    mail?: XOR<MailScalarRelationFilter, mailWhereInput>
    agent?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type tachesOrderByWithRelationInput = {
    id?: SortOrder
    mail_id?: SortOrder
    agent_user_id?: SortOrder
    statut_tache?: SortOrder
    priorite_calculee?: SortOrder
    date_attribution?: SortOrderInput | SortOrder
    commentaire?: SortOrderInput | SortOrder
    mail?: mailOrderByWithRelationInput
    agent?: usersOrderByWithRelationInput
    _relevance?: tachesOrderByRelevanceInput
  }

  export type tachesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tachesWhereInput | tachesWhereInput[]
    OR?: tachesWhereInput[]
    NOT?: tachesWhereInput | tachesWhereInput[]
    mail_id?: IntFilter<"taches"> | number
    agent_user_id?: IntFilter<"taches"> | number
    statut_tache?: EnumMailStatutFilter<"taches"> | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFilter<"taches"> | $Enums.MailPriorite
    date_attribution?: DateTimeNullableFilter<"taches"> | Date | string | null
    commentaire?: StringNullableFilter<"taches"> | string | null
    mail?: XOR<MailScalarRelationFilter, mailWhereInput>
    agent?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type tachesOrderByWithAggregationInput = {
    id?: SortOrder
    mail_id?: SortOrder
    agent_user_id?: SortOrder
    statut_tache?: SortOrder
    priorite_calculee?: SortOrder
    date_attribution?: SortOrderInput | SortOrder
    commentaire?: SortOrderInput | SortOrder
    _count?: tachesCountOrderByAggregateInput
    _avg?: tachesAvgOrderByAggregateInput
    _max?: tachesMaxOrderByAggregateInput
    _min?: tachesMinOrderByAggregateInput
    _sum?: tachesSumOrderByAggregateInput
  }

  export type tachesScalarWhereWithAggregatesInput = {
    AND?: tachesScalarWhereWithAggregatesInput | tachesScalarWhereWithAggregatesInput[]
    OR?: tachesScalarWhereWithAggregatesInput[]
    NOT?: tachesScalarWhereWithAggregatesInput | tachesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"taches"> | number
    mail_id?: IntWithAggregatesFilter<"taches"> | number
    agent_user_id?: IntWithAggregatesFilter<"taches"> | number
    statut_tache?: EnumMailStatutWithAggregatesFilter<"taches"> | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteWithAggregatesFilter<"taches"> | $Enums.MailPriorite
    date_attribution?: DateTimeNullableWithAggregatesFilter<"taches"> | Date | string | null
    commentaire?: StringNullableWithAggregatesFilter<"taches"> | string | null
  }

  export type stats_gender_mail_countWhereInput = {
    AND?: stats_gender_mail_countWhereInput | stats_gender_mail_countWhereInput[]
    OR?: stats_gender_mail_countWhereInput[]
    NOT?: stats_gender_mail_countWhereInput | stats_gender_mail_countWhereInput[]
    id?: IntFilter<"stats_gender_mail_count"> | number
    genre?: EnumGenreFilter<"stats_gender_mail_count"> | $Enums.Genre
    mail_count?: IntFilter<"stats_gender_mail_count"> | number
  }

  export type stats_gender_mail_countOrderByWithRelationInput = {
    id?: SortOrder
    genre?: SortOrder
    mail_count?: SortOrder
  }

  export type stats_gender_mail_countWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    genre?: $Enums.Genre
    AND?: stats_gender_mail_countWhereInput | stats_gender_mail_countWhereInput[]
    OR?: stats_gender_mail_countWhereInput[]
    NOT?: stats_gender_mail_countWhereInput | stats_gender_mail_countWhereInput[]
    mail_count?: IntFilter<"stats_gender_mail_count"> | number
  }, "id" | "genre">

  export type stats_gender_mail_countOrderByWithAggregationInput = {
    id?: SortOrder
    genre?: SortOrder
    mail_count?: SortOrder
    _count?: stats_gender_mail_countCountOrderByAggregateInput
    _avg?: stats_gender_mail_countAvgOrderByAggregateInput
    _max?: stats_gender_mail_countMaxOrderByAggregateInput
    _min?: stats_gender_mail_countMinOrderByAggregateInput
    _sum?: stats_gender_mail_countSumOrderByAggregateInput
  }

  export type stats_gender_mail_countScalarWhereWithAggregatesInput = {
    AND?: stats_gender_mail_countScalarWhereWithAggregatesInput | stats_gender_mail_countScalarWhereWithAggregatesInput[]
    OR?: stats_gender_mail_countScalarWhereWithAggregatesInput[]
    NOT?: stats_gender_mail_countScalarWhereWithAggregatesInput | stats_gender_mail_countScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stats_gender_mail_count"> | number
    genre?: EnumGenreWithAggregatesFilter<"stats_gender_mail_count"> | $Enums.Genre
    mail_count?: IntWithAggregatesFilter<"stats_gender_mail_count"> | number
  }

  export type stat_mail_by_genderWhereInput = {
    AND?: stat_mail_by_genderWhereInput | stat_mail_by_genderWhereInput[]
    OR?: stat_mail_by_genderWhereInput[]
    NOT?: stat_mail_by_genderWhereInput | stat_mail_by_genderWhereInput[]
    stat_date?: DateTimeFilter<"stat_mail_by_gender"> | Date | string
    gender?: EnumGenderStatFilter<"stat_mail_by_gender"> | $Enums.GenderStat
    mail_count?: IntFilter<"stat_mail_by_gender"> | number
  }

  export type stat_mail_by_genderOrderByWithRelationInput = {
    stat_date?: SortOrder
    gender?: SortOrder
    mail_count?: SortOrder
  }

  export type stat_mail_by_genderWhereUniqueInput = Prisma.AtLeast<{
    stat_date_gender?: stat_mail_by_genderStat_dateGenderCompoundUniqueInput
    AND?: stat_mail_by_genderWhereInput | stat_mail_by_genderWhereInput[]
    OR?: stat_mail_by_genderWhereInput[]
    NOT?: stat_mail_by_genderWhereInput | stat_mail_by_genderWhereInput[]
    stat_date?: DateTimeFilter<"stat_mail_by_gender"> | Date | string
    gender?: EnumGenderStatFilter<"stat_mail_by_gender"> | $Enums.GenderStat
    mail_count?: IntFilter<"stat_mail_by_gender"> | number
  }, "stat_date_gender">

  export type stat_mail_by_genderOrderByWithAggregationInput = {
    stat_date?: SortOrder
    gender?: SortOrder
    mail_count?: SortOrder
    _count?: stat_mail_by_genderCountOrderByAggregateInput
    _avg?: stat_mail_by_genderAvgOrderByAggregateInput
    _max?: stat_mail_by_genderMaxOrderByAggregateInput
    _min?: stat_mail_by_genderMinOrderByAggregateInput
    _sum?: stat_mail_by_genderSumOrderByAggregateInput
  }

  export type stat_mail_by_genderScalarWhereWithAggregatesInput = {
    AND?: stat_mail_by_genderScalarWhereWithAggregatesInput | stat_mail_by_genderScalarWhereWithAggregatesInput[]
    OR?: stat_mail_by_genderScalarWhereWithAggregatesInput[]
    NOT?: stat_mail_by_genderScalarWhereWithAggregatesInput | stat_mail_by_genderScalarWhereWithAggregatesInput[]
    stat_date?: DateTimeWithAggregatesFilter<"stat_mail_by_gender"> | Date | string
    gender?: EnumGenderStatWithAggregatesFilter<"stat_mail_by_gender"> | $Enums.GenderStat
    mail_count?: IntWithAggregatesFilter<"stat_mail_by_gender"> | number
  }

  export type stat_mail_by_priorityWhereInput = {
    AND?: stat_mail_by_priorityWhereInput | stat_mail_by_priorityWhereInput[]
    OR?: stat_mail_by_priorityWhereInput[]
    NOT?: stat_mail_by_priorityWhereInput | stat_mail_by_priorityWhereInput[]
    stat_date?: DateTimeFilter<"stat_mail_by_priority"> | Date | string
    priority_id?: IntFilter<"stat_mail_by_priority"> | number
    mail_count?: IntFilter<"stat_mail_by_priority"> | number
  }

  export type stat_mail_by_priorityOrderByWithRelationInput = {
    stat_date?: SortOrder
    priority_id?: SortOrder
    mail_count?: SortOrder
  }

  export type stat_mail_by_priorityWhereUniqueInput = Prisma.AtLeast<{
    stat_date_priority_id?: stat_mail_by_priorityStat_datePriority_idCompoundUniqueInput
    AND?: stat_mail_by_priorityWhereInput | stat_mail_by_priorityWhereInput[]
    OR?: stat_mail_by_priorityWhereInput[]
    NOT?: stat_mail_by_priorityWhereInput | stat_mail_by_priorityWhereInput[]
    stat_date?: DateTimeFilter<"stat_mail_by_priority"> | Date | string
    priority_id?: IntFilter<"stat_mail_by_priority"> | number
    mail_count?: IntFilter<"stat_mail_by_priority"> | number
  }, "stat_date_priority_id">

  export type stat_mail_by_priorityOrderByWithAggregationInput = {
    stat_date?: SortOrder
    priority_id?: SortOrder
    mail_count?: SortOrder
    _count?: stat_mail_by_priorityCountOrderByAggregateInput
    _avg?: stat_mail_by_priorityAvgOrderByAggregateInput
    _max?: stat_mail_by_priorityMaxOrderByAggregateInput
    _min?: stat_mail_by_priorityMinOrderByAggregateInput
    _sum?: stat_mail_by_prioritySumOrderByAggregateInput
  }

  export type stat_mail_by_priorityScalarWhereWithAggregatesInput = {
    AND?: stat_mail_by_priorityScalarWhereWithAggregatesInput | stat_mail_by_priorityScalarWhereWithAggregatesInput[]
    OR?: stat_mail_by_priorityScalarWhereWithAggregatesInput[]
    NOT?: stat_mail_by_priorityScalarWhereWithAggregatesInput | stat_mail_by_priorityScalarWhereWithAggregatesInput[]
    stat_date?: DateTimeWithAggregatesFilter<"stat_mail_by_priority"> | Date | string
    priority_id?: IntWithAggregatesFilter<"stat_mail_by_priority"> | number
    mail_count?: IntWithAggregatesFilter<"stat_mail_by_priority"> | number
  }

  export type departementsCreateInput = {
    nom_departement: string
    staff?: staffCreateNestedManyWithoutDepartementInput
  }

  export type departementsUncheckedCreateInput = {
    id?: number
    nom_departement: string
    staff?: staffUncheckedCreateNestedManyWithoutDepartementInput
  }

  export type departementsUpdateInput = {
    nom_departement?: StringFieldUpdateOperationsInput | string
    staff?: staffUpdateManyWithoutDepartementNestedInput
  }

  export type departementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_departement?: StringFieldUpdateOperationsInput | string
    staff?: staffUncheckedUpdateManyWithoutDepartementNestedInput
  }

  export type departementsCreateManyInput = {
    id?: number
    nom_departement: string
  }

  export type departementsUpdateManyMutationInput = {
    nom_departement?: StringFieldUpdateOperationsInput | string
  }

  export type departementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_departement?: StringFieldUpdateOperationsInput | string
  }

  export type categoryCreateInput = {
    nom_categorie: string
    mail?: mailCreateNestedManyWithoutCategorieInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    nom_categorie: string
    mail?: mailUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type categoryUpdateInput = {
    nom_categorie?: StringFieldUpdateOperationsInput | string
    mail?: mailUpdateManyWithoutCategorieNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_categorie?: StringFieldUpdateOperationsInput | string
    mail?: mailUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    nom_categorie: string
  }

  export type categoryUpdateManyMutationInput = {
    nom_categorie?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_categorie?: StringFieldUpdateOperationsInput | string
  }

  export type privacyCreateInput = {
    niveau_confidentialite: string
    mail?: mailCreateNestedManyWithoutPrivacyInput
  }

  export type privacyUncheckedCreateInput = {
    id?: number
    niveau_confidentialite: string
    mail?: mailUncheckedCreateNestedManyWithoutPrivacyInput
  }

  export type privacyUpdateInput = {
    niveau_confidentialite?: StringFieldUpdateOperationsInput | string
    mail?: mailUpdateManyWithoutPrivacyNestedInput
  }

  export type privacyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    niveau_confidentialite?: StringFieldUpdateOperationsInput | string
    mail?: mailUncheckedUpdateManyWithoutPrivacyNestedInput
  }

  export type privacyCreateManyInput = {
    id?: number
    niveau_confidentialite: string
  }

  export type privacyUpdateManyMutationInput = {
    niveau_confidentialite?: StringFieldUpdateOperationsInput | string
  }

  export type privacyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    niveau_confidentialite?: StringFieldUpdateOperationsInput | string
  }

  export type staffCreateInput = {
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
    departement?: departementsCreateNestedOneWithoutStaffInput
    mail?: mailCreateNestedManyWithoutExpediteurInput
    users?: usersCreateNestedOneWithoutStaffInput
  }

  export type staffUncheckedCreateInput = {
    id?: number
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    departement_id?: number | null
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
    mail?: mailUncheckedCreateNestedManyWithoutExpediteurInput
    users?: usersUncheckedCreateNestedOneWithoutStaffInput
  }

  export type staffUpdateInput = {
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    departement?: departementsUpdateOneWithoutStaffNestedInput
    mail?: mailUpdateManyWithoutExpediteurNestedInput
    users?: usersUpdateOneWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    departement_id?: NullableIntFieldUpdateOperationsInput | number | null
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    mail?: mailUncheckedUpdateManyWithoutExpediteurNestedInput
    users?: usersUncheckedUpdateOneWithoutStaffNestedInput
  }

  export type staffCreateManyInput = {
    id?: number
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    departement_id?: number | null
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
  }

  export type staffUpdateManyMutationInput = {
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
  }

  export type staffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    departement_id?: NullableIntFieldUpdateOperationsInput | number | null
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
  }

  export type usersCreateInput = {
    username: string
    password_hash: string
    role?: $Enums.UserRole
    staff?: staffCreateNestedOneWithoutUsersInput
    taches?: tachesCreateNestedManyWithoutAgentInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password_hash: string
    role?: $Enums.UserRole
    staff_id?: number | null
    taches?: tachesUncheckedCreateNestedManyWithoutAgentInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    staff?: staffUpdateOneWithoutUsersNestedInput
    taches?: tachesUpdateManyWithoutAgentNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    taches?: tachesUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password_hash: string
    role?: $Enums.UserRole
    staff_id?: number | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mailCreateInput = {
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    handler_user_id?: number | null
    expediteur?: staffCreateNestedOneWithoutMailInput
    categorie?: categoryCreateNestedOneWithoutMailInput
    privacy?: privacyCreateNestedOneWithoutMailInput
    taches?: tachesCreateNestedManyWithoutMailInput
  }

  export type mailUncheckedCreateInput = {
    id?: number
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    expediteur_staff_id?: number | null
    categorie_id?: number | null
    privacy_id?: number | null
    handler_user_id?: number | null
    taches?: tachesUncheckedCreateNestedManyWithoutMailInput
  }

  export type mailUpdateInput = {
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    expediteur?: staffUpdateOneWithoutMailNestedInput
    categorie?: categoryUpdateOneWithoutMailNestedInput
    privacy?: privacyUpdateOneWithoutMailNestedInput
    taches?: tachesUpdateManyWithoutMailNestedInput
  }

  export type mailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    expediteur_staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy_id?: NullableIntFieldUpdateOperationsInput | number | null
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    taches?: tachesUncheckedUpdateManyWithoutMailNestedInput
  }

  export type mailCreateManyInput = {
    id?: number
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    expediteur_staff_id?: number | null
    categorie_id?: number | null
    privacy_id?: number | null
    handler_user_id?: number | null
  }

  export type mailUpdateManyMutationInput = {
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    expediteur_staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy_id?: NullableIntFieldUpdateOperationsInput | number | null
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tachesCreateInput = {
    statut_tache?: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution?: Date | string | null
    commentaire?: string | null
    mail: mailCreateNestedOneWithoutTachesInput
    agent: usersCreateNestedOneWithoutTachesInput
  }

  export type tachesUncheckedCreateInput = {
    id?: number
    mail_id: number
    agent_user_id: number
    statut_tache?: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution?: Date | string | null
    commentaire?: string | null
  }

  export type tachesUpdateInput = {
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: mailUpdateOneRequiredWithoutTachesNestedInput
    agent?: usersUpdateOneRequiredWithoutTachesNestedInput
  }

  export type tachesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail_id?: IntFieldUpdateOperationsInput | number
    agent_user_id?: IntFieldUpdateOperationsInput | number
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tachesCreateManyInput = {
    id?: number
    mail_id: number
    agent_user_id: number
    statut_tache?: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution?: Date | string | null
    commentaire?: string | null
  }

  export type tachesUpdateManyMutationInput = {
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tachesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail_id?: IntFieldUpdateOperationsInput | number
    agent_user_id?: IntFieldUpdateOperationsInput | number
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stats_gender_mail_countCreateInput = {
    genre: $Enums.Genre
    mail_count?: number
  }

  export type stats_gender_mail_countUncheckedCreateInput = {
    id?: number
    genre: $Enums.Genre
    mail_count?: number
  }

  export type stats_gender_mail_countUpdateInput = {
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stats_gender_mail_countUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stats_gender_mail_countCreateManyInput = {
    id?: number
    genre: $Enums.Genre
    mail_count?: number
  }

  export type stats_gender_mail_countUpdateManyMutationInput = {
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stats_gender_mail_countUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stat_mail_by_genderCreateInput = {
    stat_date: Date | string
    gender: $Enums.GenderStat
    mail_count: number
  }

  export type stat_mail_by_genderUncheckedCreateInput = {
    stat_date: Date | string
    gender: $Enums.GenderStat
    mail_count: number
  }

  export type stat_mail_by_genderUpdateInput = {
    stat_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderStatFieldUpdateOperationsInput | $Enums.GenderStat
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stat_mail_by_genderUncheckedUpdateInput = {
    stat_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderStatFieldUpdateOperationsInput | $Enums.GenderStat
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stat_mail_by_genderCreateManyInput = {
    stat_date: Date | string
    gender: $Enums.GenderStat
    mail_count: number
  }

  export type stat_mail_by_genderUpdateManyMutationInput = {
    stat_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderStatFieldUpdateOperationsInput | $Enums.GenderStat
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stat_mail_by_genderUncheckedUpdateManyInput = {
    stat_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderStatFieldUpdateOperationsInput | $Enums.GenderStat
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stat_mail_by_priorityCreateInput = {
    stat_date: Date | string
    priority_id: number
    mail_count: number
  }

  export type stat_mail_by_priorityUncheckedCreateInput = {
    stat_date: Date | string
    priority_id: number
    mail_count: number
  }

  export type stat_mail_by_priorityUpdateInput = {
    stat_date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority_id?: IntFieldUpdateOperationsInput | number
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stat_mail_by_priorityUncheckedUpdateInput = {
    stat_date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority_id?: IntFieldUpdateOperationsInput | number
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stat_mail_by_priorityCreateManyInput = {
    stat_date: Date | string
    priority_id: number
    mail_count: number
  }

  export type stat_mail_by_priorityUpdateManyMutationInput = {
    stat_date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority_id?: IntFieldUpdateOperationsInput | number
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type stat_mail_by_priorityUncheckedUpdateManyInput = {
    stat_date?: DateTimeFieldUpdateOperationsInput | Date | string
    priority_id?: IntFieldUpdateOperationsInput | number
    mail_count?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StaffListRelationFilter = {
    every?: staffWhereInput
    some?: staffWhereInput
    none?: staffWhereInput
  }

  export type staffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departementsOrderByRelevanceInput = {
    fields: departementsOrderByRelevanceFieldEnum | departementsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type departementsCountOrderByAggregateInput = {
    id?: SortOrder
    nom_departement?: SortOrder
  }

  export type departementsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type departementsMaxOrderByAggregateInput = {
    id?: SortOrder
    nom_departement?: SortOrder
  }

  export type departementsMinOrderByAggregateInput = {
    id?: SortOrder
    nom_departement?: SortOrder
  }

  export type departementsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MailListRelationFilter = {
    every?: mailWhereInput
    some?: mailWhereInput
    none?: mailWhereInput
  }

  export type mailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryOrderByRelevanceInput = {
    fields: categoryOrderByRelevanceFieldEnum | categoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type privacyOrderByRelevanceInput = {
    fields: privacyOrderByRelevanceFieldEnum | privacyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type privacyCountOrderByAggregateInput = {
    id?: SortOrder
    niveau_confidentialite?: SortOrder
  }

  export type privacyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type privacyMaxOrderByAggregateInput = {
    id?: SortOrder
    niveau_confidentialite?: SortOrder
  }

  export type privacyMinOrderByAggregateInput = {
    id?: SortOrder
    niveau_confidentialite?: SortOrder
  }

  export type privacySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStaffHierarchieFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffHierarchie | EnumStaffHierarchieFieldRefInput<$PrismaModel>
    in?: $Enums.StaffHierarchie[]
    notIn?: $Enums.StaffHierarchie[]
    not?: NestedEnumStaffHierarchieFilter<$PrismaModel> | $Enums.StaffHierarchie
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[]
    notIn?: $Enums.Genre[]
    not?: NestedEnumGenreFilter<$PrismaModel> | $Enums.Genre
  }

  export type DepartementsNullableScalarRelationFilter = {
    is?: departementsWhereInput | null
    isNot?: departementsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type staffOrderByRelevanceInput = {
    fields: staffOrderByRelevanceFieldEnum | staffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type staffCountOrderByAggregateInput = {
    id?: SortOrder
    nom_complet?: SortOrder
    adresse_mail?: SortOrder
    statut_hierarchique?: SortOrder
    departement_id?: SortOrder
    est_marie?: SortOrder
    nombre_enfants?: SortOrder
    genre?: SortOrder
  }

  export type staffAvgOrderByAggregateInput = {
    id?: SortOrder
    departement_id?: SortOrder
    nombre_enfants?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    id?: SortOrder
    nom_complet?: SortOrder
    adresse_mail?: SortOrder
    statut_hierarchique?: SortOrder
    departement_id?: SortOrder
    est_marie?: SortOrder
    nombre_enfants?: SortOrder
    genre?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    id?: SortOrder
    nom_complet?: SortOrder
    adresse_mail?: SortOrder
    statut_hierarchique?: SortOrder
    departement_id?: SortOrder
    est_marie?: SortOrder
    nombre_enfants?: SortOrder
    genre?: SortOrder
  }

  export type staffSumOrderByAggregateInput = {
    id?: SortOrder
    departement_id?: SortOrder
    nombre_enfants?: SortOrder
  }

  export type EnumStaffHierarchieWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffHierarchie | EnumStaffHierarchieFieldRefInput<$PrismaModel>
    in?: $Enums.StaffHierarchie[]
    notIn?: $Enums.StaffHierarchie[]
    not?: NestedEnumStaffHierarchieWithAggregatesFilter<$PrismaModel> | $Enums.StaffHierarchie
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffHierarchieFilter<$PrismaModel>
    _max?: NestedEnumStaffHierarchieFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[]
    notIn?: $Enums.Genre[]
    not?: NestedEnumGenreWithAggregatesFilter<$PrismaModel> | $Enums.Genre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenreFilter<$PrismaModel>
    _max?: NestedEnumGenreFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StaffNullableScalarRelationFilter = {
    is?: staffWhereInput | null
    isNot?: staffWhereInput | null
  }

  export type TachesListRelationFilter = {
    every?: tachesWhereInput
    some?: tachesWhereInput
    none?: tachesWhereInput
  }

  export type tachesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    staff_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    staff_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    staff_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type PrivacyNullableScalarRelationFilter = {
    is?: privacyWhereInput | null
    isNot?: privacyWhereInput | null
  }

  export type mailOrderByRelevanceInput = {
    fields: mailOrderByRelevanceFieldEnum | mailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mailCountOrderByAggregateInput = {
    id?: SortOrder
    objet?: SortOrder
    contenu?: SortOrder
    date_reception?: SortOrder
    expediteur_staff_id?: SortOrder
    categorie_id?: SortOrder
    privacy_id?: SortOrder
    handler_user_id?: SortOrder
  }

  export type mailAvgOrderByAggregateInput = {
    id?: SortOrder
    expediteur_staff_id?: SortOrder
    categorie_id?: SortOrder
    privacy_id?: SortOrder
    handler_user_id?: SortOrder
  }

  export type mailMaxOrderByAggregateInput = {
    id?: SortOrder
    objet?: SortOrder
    contenu?: SortOrder
    date_reception?: SortOrder
    expediteur_staff_id?: SortOrder
    categorie_id?: SortOrder
    privacy_id?: SortOrder
    handler_user_id?: SortOrder
  }

  export type mailMinOrderByAggregateInput = {
    id?: SortOrder
    objet?: SortOrder
    contenu?: SortOrder
    date_reception?: SortOrder
    expediteur_staff_id?: SortOrder
    categorie_id?: SortOrder
    privacy_id?: SortOrder
    handler_user_id?: SortOrder
  }

  export type mailSumOrderByAggregateInput = {
    id?: SortOrder
    expediteur_staff_id?: SortOrder
    categorie_id?: SortOrder
    privacy_id?: SortOrder
    handler_user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMailStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.MailStatut | EnumMailStatutFieldRefInput<$PrismaModel>
    in?: $Enums.MailStatut[]
    notIn?: $Enums.MailStatut[]
    not?: NestedEnumMailStatutFilter<$PrismaModel> | $Enums.MailStatut
  }

  export type EnumMailPrioriteFilter<$PrismaModel = never> = {
    equals?: $Enums.MailPriorite | EnumMailPrioriteFieldRefInput<$PrismaModel>
    in?: $Enums.MailPriorite[]
    notIn?: $Enums.MailPriorite[]
    not?: NestedEnumMailPrioriteFilter<$PrismaModel> | $Enums.MailPriorite
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MailScalarRelationFilter = {
    is?: mailWhereInput
    isNot?: mailWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type tachesOrderByRelevanceInput = {
    fields: tachesOrderByRelevanceFieldEnum | tachesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tachesCountOrderByAggregateInput = {
    id?: SortOrder
    mail_id?: SortOrder
    agent_user_id?: SortOrder
    statut_tache?: SortOrder
    priorite_calculee?: SortOrder
    date_attribution?: SortOrder
    commentaire?: SortOrder
  }

  export type tachesAvgOrderByAggregateInput = {
    id?: SortOrder
    mail_id?: SortOrder
    agent_user_id?: SortOrder
  }

  export type tachesMaxOrderByAggregateInput = {
    id?: SortOrder
    mail_id?: SortOrder
    agent_user_id?: SortOrder
    statut_tache?: SortOrder
    priorite_calculee?: SortOrder
    date_attribution?: SortOrder
    commentaire?: SortOrder
  }

  export type tachesMinOrderByAggregateInput = {
    id?: SortOrder
    mail_id?: SortOrder
    agent_user_id?: SortOrder
    statut_tache?: SortOrder
    priorite_calculee?: SortOrder
    date_attribution?: SortOrder
    commentaire?: SortOrder
  }

  export type tachesSumOrderByAggregateInput = {
    id?: SortOrder
    mail_id?: SortOrder
    agent_user_id?: SortOrder
  }

  export type EnumMailStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailStatut | EnumMailStatutFieldRefInput<$PrismaModel>
    in?: $Enums.MailStatut[]
    notIn?: $Enums.MailStatut[]
    not?: NestedEnumMailStatutWithAggregatesFilter<$PrismaModel> | $Enums.MailStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailStatutFilter<$PrismaModel>
    _max?: NestedEnumMailStatutFilter<$PrismaModel>
  }

  export type EnumMailPrioriteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailPriorite | EnumMailPrioriteFieldRefInput<$PrismaModel>
    in?: $Enums.MailPriorite[]
    notIn?: $Enums.MailPriorite[]
    not?: NestedEnumMailPrioriteWithAggregatesFilter<$PrismaModel> | $Enums.MailPriorite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailPrioriteFilter<$PrismaModel>
    _max?: NestedEnumMailPrioriteFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type stats_gender_mail_countCountOrderByAggregateInput = {
    id?: SortOrder
    genre?: SortOrder
    mail_count?: SortOrder
  }

  export type stats_gender_mail_countAvgOrderByAggregateInput = {
    id?: SortOrder
    mail_count?: SortOrder
  }

  export type stats_gender_mail_countMaxOrderByAggregateInput = {
    id?: SortOrder
    genre?: SortOrder
    mail_count?: SortOrder
  }

  export type stats_gender_mail_countMinOrderByAggregateInput = {
    id?: SortOrder
    genre?: SortOrder
    mail_count?: SortOrder
  }

  export type stats_gender_mail_countSumOrderByAggregateInput = {
    id?: SortOrder
    mail_count?: SortOrder
  }

  export type EnumGenderStatFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderStat | EnumGenderStatFieldRefInput<$PrismaModel>
    in?: $Enums.GenderStat[]
    notIn?: $Enums.GenderStat[]
    not?: NestedEnumGenderStatFilter<$PrismaModel> | $Enums.GenderStat
  }

  export type stat_mail_by_genderStat_dateGenderCompoundUniqueInput = {
    stat_date: Date | string
    gender: $Enums.GenderStat
  }

  export type stat_mail_by_genderCountOrderByAggregateInput = {
    stat_date?: SortOrder
    gender?: SortOrder
    mail_count?: SortOrder
  }

  export type stat_mail_by_genderAvgOrderByAggregateInput = {
    mail_count?: SortOrder
  }

  export type stat_mail_by_genderMaxOrderByAggregateInput = {
    stat_date?: SortOrder
    gender?: SortOrder
    mail_count?: SortOrder
  }

  export type stat_mail_by_genderMinOrderByAggregateInput = {
    stat_date?: SortOrder
    gender?: SortOrder
    mail_count?: SortOrder
  }

  export type stat_mail_by_genderSumOrderByAggregateInput = {
    mail_count?: SortOrder
  }

  export type EnumGenderStatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderStat | EnumGenderStatFieldRefInput<$PrismaModel>
    in?: $Enums.GenderStat[]
    notIn?: $Enums.GenderStat[]
    not?: NestedEnumGenderStatWithAggregatesFilter<$PrismaModel> | $Enums.GenderStat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderStatFilter<$PrismaModel>
    _max?: NestedEnumGenderStatFilter<$PrismaModel>
  }

  export type stat_mail_by_priorityStat_datePriority_idCompoundUniqueInput = {
    stat_date: Date | string
    priority_id: number
  }

  export type stat_mail_by_priorityCountOrderByAggregateInput = {
    stat_date?: SortOrder
    priority_id?: SortOrder
    mail_count?: SortOrder
  }

  export type stat_mail_by_priorityAvgOrderByAggregateInput = {
    priority_id?: SortOrder
    mail_count?: SortOrder
  }

  export type stat_mail_by_priorityMaxOrderByAggregateInput = {
    stat_date?: SortOrder
    priority_id?: SortOrder
    mail_count?: SortOrder
  }

  export type stat_mail_by_priorityMinOrderByAggregateInput = {
    stat_date?: SortOrder
    priority_id?: SortOrder
    mail_count?: SortOrder
  }

  export type stat_mail_by_prioritySumOrderByAggregateInput = {
    priority_id?: SortOrder
    mail_count?: SortOrder
  }

  export type staffCreateNestedManyWithoutDepartementInput = {
    create?: XOR<staffCreateWithoutDepartementInput, staffUncheckedCreateWithoutDepartementInput> | staffCreateWithoutDepartementInput[] | staffUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: staffCreateOrConnectWithoutDepartementInput | staffCreateOrConnectWithoutDepartementInput[]
    createMany?: staffCreateManyDepartementInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type staffUncheckedCreateNestedManyWithoutDepartementInput = {
    create?: XOR<staffCreateWithoutDepartementInput, staffUncheckedCreateWithoutDepartementInput> | staffCreateWithoutDepartementInput[] | staffUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: staffCreateOrConnectWithoutDepartementInput | staffCreateOrConnectWithoutDepartementInput[]
    createMany?: staffCreateManyDepartementInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type staffUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<staffCreateWithoutDepartementInput, staffUncheckedCreateWithoutDepartementInput> | staffCreateWithoutDepartementInput[] | staffUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: staffCreateOrConnectWithoutDepartementInput | staffCreateOrConnectWithoutDepartementInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutDepartementInput | staffUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: staffCreateManyDepartementInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutDepartementInput | staffUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: staffUpdateManyWithWhereWithoutDepartementInput | staffUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type staffUncheckedUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<staffCreateWithoutDepartementInput, staffUncheckedCreateWithoutDepartementInput> | staffCreateWithoutDepartementInput[] | staffUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: staffCreateOrConnectWithoutDepartementInput | staffCreateOrConnectWithoutDepartementInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutDepartementInput | staffUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: staffCreateManyDepartementInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutDepartementInput | staffUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: staffUpdateManyWithWhereWithoutDepartementInput | staffUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type mailCreateNestedManyWithoutCategorieInput = {
    create?: XOR<mailCreateWithoutCategorieInput, mailUncheckedCreateWithoutCategorieInput> | mailCreateWithoutCategorieInput[] | mailUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: mailCreateOrConnectWithoutCategorieInput | mailCreateOrConnectWithoutCategorieInput[]
    createMany?: mailCreateManyCategorieInputEnvelope
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
  }

  export type mailUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<mailCreateWithoutCategorieInput, mailUncheckedCreateWithoutCategorieInput> | mailCreateWithoutCategorieInput[] | mailUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: mailCreateOrConnectWithoutCategorieInput | mailCreateOrConnectWithoutCategorieInput[]
    createMany?: mailCreateManyCategorieInputEnvelope
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
  }

  export type mailUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<mailCreateWithoutCategorieInput, mailUncheckedCreateWithoutCategorieInput> | mailCreateWithoutCategorieInput[] | mailUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: mailCreateOrConnectWithoutCategorieInput | mailCreateOrConnectWithoutCategorieInput[]
    upsert?: mailUpsertWithWhereUniqueWithoutCategorieInput | mailUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: mailCreateManyCategorieInputEnvelope
    set?: mailWhereUniqueInput | mailWhereUniqueInput[]
    disconnect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    delete?: mailWhereUniqueInput | mailWhereUniqueInput[]
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    update?: mailUpdateWithWhereUniqueWithoutCategorieInput | mailUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: mailUpdateManyWithWhereWithoutCategorieInput | mailUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: mailScalarWhereInput | mailScalarWhereInput[]
  }

  export type mailUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<mailCreateWithoutCategorieInput, mailUncheckedCreateWithoutCategorieInput> | mailCreateWithoutCategorieInput[] | mailUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: mailCreateOrConnectWithoutCategorieInput | mailCreateOrConnectWithoutCategorieInput[]
    upsert?: mailUpsertWithWhereUniqueWithoutCategorieInput | mailUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: mailCreateManyCategorieInputEnvelope
    set?: mailWhereUniqueInput | mailWhereUniqueInput[]
    disconnect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    delete?: mailWhereUniqueInput | mailWhereUniqueInput[]
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    update?: mailUpdateWithWhereUniqueWithoutCategorieInput | mailUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: mailUpdateManyWithWhereWithoutCategorieInput | mailUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: mailScalarWhereInput | mailScalarWhereInput[]
  }

  export type mailCreateNestedManyWithoutPrivacyInput = {
    create?: XOR<mailCreateWithoutPrivacyInput, mailUncheckedCreateWithoutPrivacyInput> | mailCreateWithoutPrivacyInput[] | mailUncheckedCreateWithoutPrivacyInput[]
    connectOrCreate?: mailCreateOrConnectWithoutPrivacyInput | mailCreateOrConnectWithoutPrivacyInput[]
    createMany?: mailCreateManyPrivacyInputEnvelope
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
  }

  export type mailUncheckedCreateNestedManyWithoutPrivacyInput = {
    create?: XOR<mailCreateWithoutPrivacyInput, mailUncheckedCreateWithoutPrivacyInput> | mailCreateWithoutPrivacyInput[] | mailUncheckedCreateWithoutPrivacyInput[]
    connectOrCreate?: mailCreateOrConnectWithoutPrivacyInput | mailCreateOrConnectWithoutPrivacyInput[]
    createMany?: mailCreateManyPrivacyInputEnvelope
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
  }

  export type mailUpdateManyWithoutPrivacyNestedInput = {
    create?: XOR<mailCreateWithoutPrivacyInput, mailUncheckedCreateWithoutPrivacyInput> | mailCreateWithoutPrivacyInput[] | mailUncheckedCreateWithoutPrivacyInput[]
    connectOrCreate?: mailCreateOrConnectWithoutPrivacyInput | mailCreateOrConnectWithoutPrivacyInput[]
    upsert?: mailUpsertWithWhereUniqueWithoutPrivacyInput | mailUpsertWithWhereUniqueWithoutPrivacyInput[]
    createMany?: mailCreateManyPrivacyInputEnvelope
    set?: mailWhereUniqueInput | mailWhereUniqueInput[]
    disconnect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    delete?: mailWhereUniqueInput | mailWhereUniqueInput[]
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    update?: mailUpdateWithWhereUniqueWithoutPrivacyInput | mailUpdateWithWhereUniqueWithoutPrivacyInput[]
    updateMany?: mailUpdateManyWithWhereWithoutPrivacyInput | mailUpdateManyWithWhereWithoutPrivacyInput[]
    deleteMany?: mailScalarWhereInput | mailScalarWhereInput[]
  }

  export type mailUncheckedUpdateManyWithoutPrivacyNestedInput = {
    create?: XOR<mailCreateWithoutPrivacyInput, mailUncheckedCreateWithoutPrivacyInput> | mailCreateWithoutPrivacyInput[] | mailUncheckedCreateWithoutPrivacyInput[]
    connectOrCreate?: mailCreateOrConnectWithoutPrivacyInput | mailCreateOrConnectWithoutPrivacyInput[]
    upsert?: mailUpsertWithWhereUniqueWithoutPrivacyInput | mailUpsertWithWhereUniqueWithoutPrivacyInput[]
    createMany?: mailCreateManyPrivacyInputEnvelope
    set?: mailWhereUniqueInput | mailWhereUniqueInput[]
    disconnect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    delete?: mailWhereUniqueInput | mailWhereUniqueInput[]
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    update?: mailUpdateWithWhereUniqueWithoutPrivacyInput | mailUpdateWithWhereUniqueWithoutPrivacyInput[]
    updateMany?: mailUpdateManyWithWhereWithoutPrivacyInput | mailUpdateManyWithWhereWithoutPrivacyInput[]
    deleteMany?: mailScalarWhereInput | mailScalarWhereInput[]
  }

  export type departementsCreateNestedOneWithoutStaffInput = {
    create?: XOR<departementsCreateWithoutStaffInput, departementsUncheckedCreateWithoutStaffInput>
    connectOrCreate?: departementsCreateOrConnectWithoutStaffInput
    connect?: departementsWhereUniqueInput
  }

  export type mailCreateNestedManyWithoutExpediteurInput = {
    create?: XOR<mailCreateWithoutExpediteurInput, mailUncheckedCreateWithoutExpediteurInput> | mailCreateWithoutExpediteurInput[] | mailUncheckedCreateWithoutExpediteurInput[]
    connectOrCreate?: mailCreateOrConnectWithoutExpediteurInput | mailCreateOrConnectWithoutExpediteurInput[]
    createMany?: mailCreateManyExpediteurInputEnvelope
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutStaffInput = {
    create?: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
    connectOrCreate?: usersCreateOrConnectWithoutStaffInput
    connect?: usersWhereUniqueInput
  }

  export type mailUncheckedCreateNestedManyWithoutExpediteurInput = {
    create?: XOR<mailCreateWithoutExpediteurInput, mailUncheckedCreateWithoutExpediteurInput> | mailCreateWithoutExpediteurInput[] | mailUncheckedCreateWithoutExpediteurInput[]
    connectOrCreate?: mailCreateOrConnectWithoutExpediteurInput | mailCreateOrConnectWithoutExpediteurInput[]
    createMany?: mailCreateManyExpediteurInputEnvelope
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedOneWithoutStaffInput = {
    create?: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
    connectOrCreate?: usersCreateOrConnectWithoutStaffInput
    connect?: usersWhereUniqueInput
  }

  export type EnumStaffHierarchieFieldUpdateOperationsInput = {
    set?: $Enums.StaffHierarchie
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumGenreFieldUpdateOperationsInput = {
    set?: $Enums.Genre
  }

  export type departementsUpdateOneWithoutStaffNestedInput = {
    create?: XOR<departementsCreateWithoutStaffInput, departementsUncheckedCreateWithoutStaffInput>
    connectOrCreate?: departementsCreateOrConnectWithoutStaffInput
    upsert?: departementsUpsertWithoutStaffInput
    disconnect?: departementsWhereInput | boolean
    delete?: departementsWhereInput | boolean
    connect?: departementsWhereUniqueInput
    update?: XOR<XOR<departementsUpdateToOneWithWhereWithoutStaffInput, departementsUpdateWithoutStaffInput>, departementsUncheckedUpdateWithoutStaffInput>
  }

  export type mailUpdateManyWithoutExpediteurNestedInput = {
    create?: XOR<mailCreateWithoutExpediteurInput, mailUncheckedCreateWithoutExpediteurInput> | mailCreateWithoutExpediteurInput[] | mailUncheckedCreateWithoutExpediteurInput[]
    connectOrCreate?: mailCreateOrConnectWithoutExpediteurInput | mailCreateOrConnectWithoutExpediteurInput[]
    upsert?: mailUpsertWithWhereUniqueWithoutExpediteurInput | mailUpsertWithWhereUniqueWithoutExpediteurInput[]
    createMany?: mailCreateManyExpediteurInputEnvelope
    set?: mailWhereUniqueInput | mailWhereUniqueInput[]
    disconnect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    delete?: mailWhereUniqueInput | mailWhereUniqueInput[]
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    update?: mailUpdateWithWhereUniqueWithoutExpediteurInput | mailUpdateWithWhereUniqueWithoutExpediteurInput[]
    updateMany?: mailUpdateManyWithWhereWithoutExpediteurInput | mailUpdateManyWithWhereWithoutExpediteurInput[]
    deleteMany?: mailScalarWhereInput | mailScalarWhereInput[]
  }

  export type usersUpdateOneWithoutStaffNestedInput = {
    create?: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
    connectOrCreate?: usersCreateOrConnectWithoutStaffInput
    upsert?: usersUpsertWithoutStaffInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutStaffInput, usersUpdateWithoutStaffInput>, usersUncheckedUpdateWithoutStaffInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type mailUncheckedUpdateManyWithoutExpediteurNestedInput = {
    create?: XOR<mailCreateWithoutExpediteurInput, mailUncheckedCreateWithoutExpediteurInput> | mailCreateWithoutExpediteurInput[] | mailUncheckedCreateWithoutExpediteurInput[]
    connectOrCreate?: mailCreateOrConnectWithoutExpediteurInput | mailCreateOrConnectWithoutExpediteurInput[]
    upsert?: mailUpsertWithWhereUniqueWithoutExpediteurInput | mailUpsertWithWhereUniqueWithoutExpediteurInput[]
    createMany?: mailCreateManyExpediteurInputEnvelope
    set?: mailWhereUniqueInput | mailWhereUniqueInput[]
    disconnect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    delete?: mailWhereUniqueInput | mailWhereUniqueInput[]
    connect?: mailWhereUniqueInput | mailWhereUniqueInput[]
    update?: mailUpdateWithWhereUniqueWithoutExpediteurInput | mailUpdateWithWhereUniqueWithoutExpediteurInput[]
    updateMany?: mailUpdateManyWithWhereWithoutExpediteurInput | mailUpdateManyWithWhereWithoutExpediteurInput[]
    deleteMany?: mailScalarWhereInput | mailScalarWhereInput[]
  }

  export type usersUncheckedUpdateOneWithoutStaffNestedInput = {
    create?: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
    connectOrCreate?: usersCreateOrConnectWithoutStaffInput
    upsert?: usersUpsertWithoutStaffInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutStaffInput, usersUpdateWithoutStaffInput>, usersUncheckedUpdateWithoutStaffInput>
  }

  export type staffCreateNestedOneWithoutUsersInput = {
    create?: XOR<staffCreateWithoutUsersInput, staffUncheckedCreateWithoutUsersInput>
    connectOrCreate?: staffCreateOrConnectWithoutUsersInput
    connect?: staffWhereUniqueInput
  }

  export type tachesCreateNestedManyWithoutAgentInput = {
    create?: XOR<tachesCreateWithoutAgentInput, tachesUncheckedCreateWithoutAgentInput> | tachesCreateWithoutAgentInput[] | tachesUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: tachesCreateOrConnectWithoutAgentInput | tachesCreateOrConnectWithoutAgentInput[]
    createMany?: tachesCreateManyAgentInputEnvelope
    connect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
  }

  export type tachesUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<tachesCreateWithoutAgentInput, tachesUncheckedCreateWithoutAgentInput> | tachesCreateWithoutAgentInput[] | tachesUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: tachesCreateOrConnectWithoutAgentInput | tachesCreateOrConnectWithoutAgentInput[]
    createMany?: tachesCreateManyAgentInputEnvelope
    connect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type staffUpdateOneWithoutUsersNestedInput = {
    create?: XOR<staffCreateWithoutUsersInput, staffUncheckedCreateWithoutUsersInput>
    connectOrCreate?: staffCreateOrConnectWithoutUsersInput
    upsert?: staffUpsertWithoutUsersInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutUsersInput, staffUpdateWithoutUsersInput>, staffUncheckedUpdateWithoutUsersInput>
  }

  export type tachesUpdateManyWithoutAgentNestedInput = {
    create?: XOR<tachesCreateWithoutAgentInput, tachesUncheckedCreateWithoutAgentInput> | tachesCreateWithoutAgentInput[] | tachesUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: tachesCreateOrConnectWithoutAgentInput | tachesCreateOrConnectWithoutAgentInput[]
    upsert?: tachesUpsertWithWhereUniqueWithoutAgentInput | tachesUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: tachesCreateManyAgentInputEnvelope
    set?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    disconnect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    delete?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    connect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    update?: tachesUpdateWithWhereUniqueWithoutAgentInput | tachesUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: tachesUpdateManyWithWhereWithoutAgentInput | tachesUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: tachesScalarWhereInput | tachesScalarWhereInput[]
  }

  export type tachesUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<tachesCreateWithoutAgentInput, tachesUncheckedCreateWithoutAgentInput> | tachesCreateWithoutAgentInput[] | tachesUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: tachesCreateOrConnectWithoutAgentInput | tachesCreateOrConnectWithoutAgentInput[]
    upsert?: tachesUpsertWithWhereUniqueWithoutAgentInput | tachesUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: tachesCreateManyAgentInputEnvelope
    set?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    disconnect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    delete?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    connect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    update?: tachesUpdateWithWhereUniqueWithoutAgentInput | tachesUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: tachesUpdateManyWithWhereWithoutAgentInput | tachesUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: tachesScalarWhereInput | tachesScalarWhereInput[]
  }

  export type staffCreateNestedOneWithoutMailInput = {
    create?: XOR<staffCreateWithoutMailInput, staffUncheckedCreateWithoutMailInput>
    connectOrCreate?: staffCreateOrConnectWithoutMailInput
    connect?: staffWhereUniqueInput
  }

  export type categoryCreateNestedOneWithoutMailInput = {
    create?: XOR<categoryCreateWithoutMailInput, categoryUncheckedCreateWithoutMailInput>
    connectOrCreate?: categoryCreateOrConnectWithoutMailInput
    connect?: categoryWhereUniqueInput
  }

  export type privacyCreateNestedOneWithoutMailInput = {
    create?: XOR<privacyCreateWithoutMailInput, privacyUncheckedCreateWithoutMailInput>
    connectOrCreate?: privacyCreateOrConnectWithoutMailInput
    connect?: privacyWhereUniqueInput
  }

  export type tachesCreateNestedManyWithoutMailInput = {
    create?: XOR<tachesCreateWithoutMailInput, tachesUncheckedCreateWithoutMailInput> | tachesCreateWithoutMailInput[] | tachesUncheckedCreateWithoutMailInput[]
    connectOrCreate?: tachesCreateOrConnectWithoutMailInput | tachesCreateOrConnectWithoutMailInput[]
    createMany?: tachesCreateManyMailInputEnvelope
    connect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
  }

  export type tachesUncheckedCreateNestedManyWithoutMailInput = {
    create?: XOR<tachesCreateWithoutMailInput, tachesUncheckedCreateWithoutMailInput> | tachesCreateWithoutMailInput[] | tachesUncheckedCreateWithoutMailInput[]
    connectOrCreate?: tachesCreateOrConnectWithoutMailInput | tachesCreateOrConnectWithoutMailInput[]
    createMany?: tachesCreateManyMailInputEnvelope
    connect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type staffUpdateOneWithoutMailNestedInput = {
    create?: XOR<staffCreateWithoutMailInput, staffUncheckedCreateWithoutMailInput>
    connectOrCreate?: staffCreateOrConnectWithoutMailInput
    upsert?: staffUpsertWithoutMailInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutMailInput, staffUpdateWithoutMailInput>, staffUncheckedUpdateWithoutMailInput>
  }

  export type categoryUpdateOneWithoutMailNestedInput = {
    create?: XOR<categoryCreateWithoutMailInput, categoryUncheckedCreateWithoutMailInput>
    connectOrCreate?: categoryCreateOrConnectWithoutMailInput
    upsert?: categoryUpsertWithoutMailInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutMailInput, categoryUpdateWithoutMailInput>, categoryUncheckedUpdateWithoutMailInput>
  }

  export type privacyUpdateOneWithoutMailNestedInput = {
    create?: XOR<privacyCreateWithoutMailInput, privacyUncheckedCreateWithoutMailInput>
    connectOrCreate?: privacyCreateOrConnectWithoutMailInput
    upsert?: privacyUpsertWithoutMailInput
    disconnect?: privacyWhereInput | boolean
    delete?: privacyWhereInput | boolean
    connect?: privacyWhereUniqueInput
    update?: XOR<XOR<privacyUpdateToOneWithWhereWithoutMailInput, privacyUpdateWithoutMailInput>, privacyUncheckedUpdateWithoutMailInput>
  }

  export type tachesUpdateManyWithoutMailNestedInput = {
    create?: XOR<tachesCreateWithoutMailInput, tachesUncheckedCreateWithoutMailInput> | tachesCreateWithoutMailInput[] | tachesUncheckedCreateWithoutMailInput[]
    connectOrCreate?: tachesCreateOrConnectWithoutMailInput | tachesCreateOrConnectWithoutMailInput[]
    upsert?: tachesUpsertWithWhereUniqueWithoutMailInput | tachesUpsertWithWhereUniqueWithoutMailInput[]
    createMany?: tachesCreateManyMailInputEnvelope
    set?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    disconnect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    delete?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    connect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    update?: tachesUpdateWithWhereUniqueWithoutMailInput | tachesUpdateWithWhereUniqueWithoutMailInput[]
    updateMany?: tachesUpdateManyWithWhereWithoutMailInput | tachesUpdateManyWithWhereWithoutMailInput[]
    deleteMany?: tachesScalarWhereInput | tachesScalarWhereInput[]
  }

  export type tachesUncheckedUpdateManyWithoutMailNestedInput = {
    create?: XOR<tachesCreateWithoutMailInput, tachesUncheckedCreateWithoutMailInput> | tachesCreateWithoutMailInput[] | tachesUncheckedCreateWithoutMailInput[]
    connectOrCreate?: tachesCreateOrConnectWithoutMailInput | tachesCreateOrConnectWithoutMailInput[]
    upsert?: tachesUpsertWithWhereUniqueWithoutMailInput | tachesUpsertWithWhereUniqueWithoutMailInput[]
    createMany?: tachesCreateManyMailInputEnvelope
    set?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    disconnect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    delete?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    connect?: tachesWhereUniqueInput | tachesWhereUniqueInput[]
    update?: tachesUpdateWithWhereUniqueWithoutMailInput | tachesUpdateWithWhereUniqueWithoutMailInput[]
    updateMany?: tachesUpdateManyWithWhereWithoutMailInput | tachesUpdateManyWithWhereWithoutMailInput[]
    deleteMany?: tachesScalarWhereInput | tachesScalarWhereInput[]
  }

  export type mailCreateNestedOneWithoutTachesInput = {
    create?: XOR<mailCreateWithoutTachesInput, mailUncheckedCreateWithoutTachesInput>
    connectOrCreate?: mailCreateOrConnectWithoutTachesInput
    connect?: mailWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTachesInput = {
    create?: XOR<usersCreateWithoutTachesInput, usersUncheckedCreateWithoutTachesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTachesInput
    connect?: usersWhereUniqueInput
  }

  export type EnumMailStatutFieldUpdateOperationsInput = {
    set?: $Enums.MailStatut
  }

  export type EnumMailPrioriteFieldUpdateOperationsInput = {
    set?: $Enums.MailPriorite
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type mailUpdateOneRequiredWithoutTachesNestedInput = {
    create?: XOR<mailCreateWithoutTachesInput, mailUncheckedCreateWithoutTachesInput>
    connectOrCreate?: mailCreateOrConnectWithoutTachesInput
    upsert?: mailUpsertWithoutTachesInput
    connect?: mailWhereUniqueInput
    update?: XOR<XOR<mailUpdateToOneWithWhereWithoutTachesInput, mailUpdateWithoutTachesInput>, mailUncheckedUpdateWithoutTachesInput>
  }

  export type usersUpdateOneRequiredWithoutTachesNestedInput = {
    create?: XOR<usersCreateWithoutTachesInput, usersUncheckedCreateWithoutTachesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTachesInput
    upsert?: usersUpsertWithoutTachesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTachesInput, usersUpdateWithoutTachesInput>, usersUncheckedUpdateWithoutTachesInput>
  }

  export type EnumGenderStatFieldUpdateOperationsInput = {
    set?: $Enums.GenderStat
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumStaffHierarchieFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffHierarchie | EnumStaffHierarchieFieldRefInput<$PrismaModel>
    in?: $Enums.StaffHierarchie[]
    notIn?: $Enums.StaffHierarchie[]
    not?: NestedEnumStaffHierarchieFilter<$PrismaModel> | $Enums.StaffHierarchie
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[]
    notIn?: $Enums.Genre[]
    not?: NestedEnumGenreFilter<$PrismaModel> | $Enums.Genre
  }

  export type NestedEnumStaffHierarchieWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffHierarchie | EnumStaffHierarchieFieldRefInput<$PrismaModel>
    in?: $Enums.StaffHierarchie[]
    notIn?: $Enums.StaffHierarchie[]
    not?: NestedEnumStaffHierarchieWithAggregatesFilter<$PrismaModel> | $Enums.StaffHierarchie
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffHierarchieFilter<$PrismaModel>
    _max?: NestedEnumStaffHierarchieFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[]
    notIn?: $Enums.Genre[]
    not?: NestedEnumGenreWithAggregatesFilter<$PrismaModel> | $Enums.Genre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenreFilter<$PrismaModel>
    _max?: NestedEnumGenreFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMailStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.MailStatut | EnumMailStatutFieldRefInput<$PrismaModel>
    in?: $Enums.MailStatut[]
    notIn?: $Enums.MailStatut[]
    not?: NestedEnumMailStatutFilter<$PrismaModel> | $Enums.MailStatut
  }

  export type NestedEnumMailPrioriteFilter<$PrismaModel = never> = {
    equals?: $Enums.MailPriorite | EnumMailPrioriteFieldRefInput<$PrismaModel>
    in?: $Enums.MailPriorite[]
    notIn?: $Enums.MailPriorite[]
    not?: NestedEnumMailPrioriteFilter<$PrismaModel> | $Enums.MailPriorite
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMailStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailStatut | EnumMailStatutFieldRefInput<$PrismaModel>
    in?: $Enums.MailStatut[]
    notIn?: $Enums.MailStatut[]
    not?: NestedEnumMailStatutWithAggregatesFilter<$PrismaModel> | $Enums.MailStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailStatutFilter<$PrismaModel>
    _max?: NestedEnumMailStatutFilter<$PrismaModel>
  }

  export type NestedEnumMailPrioriteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailPriorite | EnumMailPrioriteFieldRefInput<$PrismaModel>
    in?: $Enums.MailPriorite[]
    notIn?: $Enums.MailPriorite[]
    not?: NestedEnumMailPrioriteWithAggregatesFilter<$PrismaModel> | $Enums.MailPriorite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailPrioriteFilter<$PrismaModel>
    _max?: NestedEnumMailPrioriteFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderStatFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderStat | EnumGenderStatFieldRefInput<$PrismaModel>
    in?: $Enums.GenderStat[]
    notIn?: $Enums.GenderStat[]
    not?: NestedEnumGenderStatFilter<$PrismaModel> | $Enums.GenderStat
  }

  export type NestedEnumGenderStatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderStat | EnumGenderStatFieldRefInput<$PrismaModel>
    in?: $Enums.GenderStat[]
    notIn?: $Enums.GenderStat[]
    not?: NestedEnumGenderStatWithAggregatesFilter<$PrismaModel> | $Enums.GenderStat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderStatFilter<$PrismaModel>
    _max?: NestedEnumGenderStatFilter<$PrismaModel>
  }

  export type staffCreateWithoutDepartementInput = {
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
    mail?: mailCreateNestedManyWithoutExpediteurInput
    users?: usersCreateNestedOneWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutDepartementInput = {
    id?: number
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
    mail?: mailUncheckedCreateNestedManyWithoutExpediteurInput
    users?: usersUncheckedCreateNestedOneWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutDepartementInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutDepartementInput, staffUncheckedCreateWithoutDepartementInput>
  }

  export type staffCreateManyDepartementInputEnvelope = {
    data: staffCreateManyDepartementInput | staffCreateManyDepartementInput[]
    skipDuplicates?: boolean
  }

  export type staffUpsertWithWhereUniqueWithoutDepartementInput = {
    where: staffWhereUniqueInput
    update: XOR<staffUpdateWithoutDepartementInput, staffUncheckedUpdateWithoutDepartementInput>
    create: XOR<staffCreateWithoutDepartementInput, staffUncheckedCreateWithoutDepartementInput>
  }

  export type staffUpdateWithWhereUniqueWithoutDepartementInput = {
    where: staffWhereUniqueInput
    data: XOR<staffUpdateWithoutDepartementInput, staffUncheckedUpdateWithoutDepartementInput>
  }

  export type staffUpdateManyWithWhereWithoutDepartementInput = {
    where: staffScalarWhereInput
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutDepartementInput>
  }

  export type staffScalarWhereInput = {
    AND?: staffScalarWhereInput | staffScalarWhereInput[]
    OR?: staffScalarWhereInput[]
    NOT?: staffScalarWhereInput | staffScalarWhereInput[]
    id?: IntFilter<"staff"> | number
    nom_complet?: StringFilter<"staff"> | string
    adresse_mail?: StringFilter<"staff"> | string
    statut_hierarchique?: EnumStaffHierarchieFilter<"staff"> | $Enums.StaffHierarchie
    departement_id?: IntNullableFilter<"staff"> | number | null
    est_marie?: BoolFilter<"staff"> | boolean
    nombre_enfants?: IntFilter<"staff"> | number
    genre?: EnumGenreFilter<"staff"> | $Enums.Genre
  }

  export type mailCreateWithoutCategorieInput = {
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    handler_user_id?: number | null
    expediteur?: staffCreateNestedOneWithoutMailInput
    privacy?: privacyCreateNestedOneWithoutMailInput
    taches?: tachesCreateNestedManyWithoutMailInput
  }

  export type mailUncheckedCreateWithoutCategorieInput = {
    id?: number
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    expediteur_staff_id?: number | null
    privacy_id?: number | null
    handler_user_id?: number | null
    taches?: tachesUncheckedCreateNestedManyWithoutMailInput
  }

  export type mailCreateOrConnectWithoutCategorieInput = {
    where: mailWhereUniqueInput
    create: XOR<mailCreateWithoutCategorieInput, mailUncheckedCreateWithoutCategorieInput>
  }

  export type mailCreateManyCategorieInputEnvelope = {
    data: mailCreateManyCategorieInput | mailCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type mailUpsertWithWhereUniqueWithoutCategorieInput = {
    where: mailWhereUniqueInput
    update: XOR<mailUpdateWithoutCategorieInput, mailUncheckedUpdateWithoutCategorieInput>
    create: XOR<mailCreateWithoutCategorieInput, mailUncheckedCreateWithoutCategorieInput>
  }

  export type mailUpdateWithWhereUniqueWithoutCategorieInput = {
    where: mailWhereUniqueInput
    data: XOR<mailUpdateWithoutCategorieInput, mailUncheckedUpdateWithoutCategorieInput>
  }

  export type mailUpdateManyWithWhereWithoutCategorieInput = {
    where: mailScalarWhereInput
    data: XOR<mailUpdateManyMutationInput, mailUncheckedUpdateManyWithoutCategorieInput>
  }

  export type mailScalarWhereInput = {
    AND?: mailScalarWhereInput | mailScalarWhereInput[]
    OR?: mailScalarWhereInput[]
    NOT?: mailScalarWhereInput | mailScalarWhereInput[]
    id?: IntFilter<"mail"> | number
    objet?: StringFilter<"mail"> | string
    contenu?: StringNullableFilter<"mail"> | string | null
    date_reception?: DateTimeFilter<"mail"> | Date | string
    expediteur_staff_id?: IntNullableFilter<"mail"> | number | null
    categorie_id?: IntNullableFilter<"mail"> | number | null
    privacy_id?: IntNullableFilter<"mail"> | number | null
    handler_user_id?: IntNullableFilter<"mail"> | number | null
  }

  export type mailCreateWithoutPrivacyInput = {
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    handler_user_id?: number | null
    expediteur?: staffCreateNestedOneWithoutMailInput
    categorie?: categoryCreateNestedOneWithoutMailInput
    taches?: tachesCreateNestedManyWithoutMailInput
  }

  export type mailUncheckedCreateWithoutPrivacyInput = {
    id?: number
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    expediteur_staff_id?: number | null
    categorie_id?: number | null
    handler_user_id?: number | null
    taches?: tachesUncheckedCreateNestedManyWithoutMailInput
  }

  export type mailCreateOrConnectWithoutPrivacyInput = {
    where: mailWhereUniqueInput
    create: XOR<mailCreateWithoutPrivacyInput, mailUncheckedCreateWithoutPrivacyInput>
  }

  export type mailCreateManyPrivacyInputEnvelope = {
    data: mailCreateManyPrivacyInput | mailCreateManyPrivacyInput[]
    skipDuplicates?: boolean
  }

  export type mailUpsertWithWhereUniqueWithoutPrivacyInput = {
    where: mailWhereUniqueInput
    update: XOR<mailUpdateWithoutPrivacyInput, mailUncheckedUpdateWithoutPrivacyInput>
    create: XOR<mailCreateWithoutPrivacyInput, mailUncheckedCreateWithoutPrivacyInput>
  }

  export type mailUpdateWithWhereUniqueWithoutPrivacyInput = {
    where: mailWhereUniqueInput
    data: XOR<mailUpdateWithoutPrivacyInput, mailUncheckedUpdateWithoutPrivacyInput>
  }

  export type mailUpdateManyWithWhereWithoutPrivacyInput = {
    where: mailScalarWhereInput
    data: XOR<mailUpdateManyMutationInput, mailUncheckedUpdateManyWithoutPrivacyInput>
  }

  export type departementsCreateWithoutStaffInput = {
    nom_departement: string
  }

  export type departementsUncheckedCreateWithoutStaffInput = {
    id?: number
    nom_departement: string
  }

  export type departementsCreateOrConnectWithoutStaffInput = {
    where: departementsWhereUniqueInput
    create: XOR<departementsCreateWithoutStaffInput, departementsUncheckedCreateWithoutStaffInput>
  }

  export type mailCreateWithoutExpediteurInput = {
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    handler_user_id?: number | null
    categorie?: categoryCreateNestedOneWithoutMailInput
    privacy?: privacyCreateNestedOneWithoutMailInput
    taches?: tachesCreateNestedManyWithoutMailInput
  }

  export type mailUncheckedCreateWithoutExpediteurInput = {
    id?: number
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    categorie_id?: number | null
    privacy_id?: number | null
    handler_user_id?: number | null
    taches?: tachesUncheckedCreateNestedManyWithoutMailInput
  }

  export type mailCreateOrConnectWithoutExpediteurInput = {
    where: mailWhereUniqueInput
    create: XOR<mailCreateWithoutExpediteurInput, mailUncheckedCreateWithoutExpediteurInput>
  }

  export type mailCreateManyExpediteurInputEnvelope = {
    data: mailCreateManyExpediteurInput | mailCreateManyExpediteurInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutStaffInput = {
    username: string
    password_hash: string
    role?: $Enums.UserRole
    taches?: tachesCreateNestedManyWithoutAgentInput
  }

  export type usersUncheckedCreateWithoutStaffInput = {
    id?: number
    username: string
    password_hash: string
    role?: $Enums.UserRole
    taches?: tachesUncheckedCreateNestedManyWithoutAgentInput
  }

  export type usersCreateOrConnectWithoutStaffInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
  }

  export type departementsUpsertWithoutStaffInput = {
    update: XOR<departementsUpdateWithoutStaffInput, departementsUncheckedUpdateWithoutStaffInput>
    create: XOR<departementsCreateWithoutStaffInput, departementsUncheckedCreateWithoutStaffInput>
    where?: departementsWhereInput
  }

  export type departementsUpdateToOneWithWhereWithoutStaffInput = {
    where?: departementsWhereInput
    data: XOR<departementsUpdateWithoutStaffInput, departementsUncheckedUpdateWithoutStaffInput>
  }

  export type departementsUpdateWithoutStaffInput = {
    nom_departement?: StringFieldUpdateOperationsInput | string
  }

  export type departementsUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_departement?: StringFieldUpdateOperationsInput | string
  }

  export type mailUpsertWithWhereUniqueWithoutExpediteurInput = {
    where: mailWhereUniqueInput
    update: XOR<mailUpdateWithoutExpediteurInput, mailUncheckedUpdateWithoutExpediteurInput>
    create: XOR<mailCreateWithoutExpediteurInput, mailUncheckedCreateWithoutExpediteurInput>
  }

  export type mailUpdateWithWhereUniqueWithoutExpediteurInput = {
    where: mailWhereUniqueInput
    data: XOR<mailUpdateWithoutExpediteurInput, mailUncheckedUpdateWithoutExpediteurInput>
  }

  export type mailUpdateManyWithWhereWithoutExpediteurInput = {
    where: mailScalarWhereInput
    data: XOR<mailUpdateManyMutationInput, mailUncheckedUpdateManyWithoutExpediteurInput>
  }

  export type usersUpsertWithoutStaffInput = {
    update: XOR<usersUpdateWithoutStaffInput, usersUncheckedUpdateWithoutStaffInput>
    create: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutStaffInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutStaffInput, usersUncheckedUpdateWithoutStaffInput>
  }

  export type usersUpdateWithoutStaffInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    taches?: tachesUpdateManyWithoutAgentNestedInput
  }

  export type usersUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    taches?: tachesUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type staffCreateWithoutUsersInput = {
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
    departement?: departementsCreateNestedOneWithoutStaffInput
    mail?: mailCreateNestedManyWithoutExpediteurInput
  }

  export type staffUncheckedCreateWithoutUsersInput = {
    id?: number
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    departement_id?: number | null
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
    mail?: mailUncheckedCreateNestedManyWithoutExpediteurInput
  }

  export type staffCreateOrConnectWithoutUsersInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutUsersInput, staffUncheckedCreateWithoutUsersInput>
  }

  export type tachesCreateWithoutAgentInput = {
    statut_tache?: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution?: Date | string | null
    commentaire?: string | null
    mail: mailCreateNestedOneWithoutTachesInput
  }

  export type tachesUncheckedCreateWithoutAgentInput = {
    id?: number
    mail_id: number
    statut_tache?: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution?: Date | string | null
    commentaire?: string | null
  }

  export type tachesCreateOrConnectWithoutAgentInput = {
    where: tachesWhereUniqueInput
    create: XOR<tachesCreateWithoutAgentInput, tachesUncheckedCreateWithoutAgentInput>
  }

  export type tachesCreateManyAgentInputEnvelope = {
    data: tachesCreateManyAgentInput | tachesCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type staffUpsertWithoutUsersInput = {
    update: XOR<staffUpdateWithoutUsersInput, staffUncheckedUpdateWithoutUsersInput>
    create: XOR<staffCreateWithoutUsersInput, staffUncheckedCreateWithoutUsersInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutUsersInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutUsersInput, staffUncheckedUpdateWithoutUsersInput>
  }

  export type staffUpdateWithoutUsersInput = {
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    departement?: departementsUpdateOneWithoutStaffNestedInput
    mail?: mailUpdateManyWithoutExpediteurNestedInput
  }

  export type staffUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    departement_id?: NullableIntFieldUpdateOperationsInput | number | null
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    mail?: mailUncheckedUpdateManyWithoutExpediteurNestedInput
  }

  export type tachesUpsertWithWhereUniqueWithoutAgentInput = {
    where: tachesWhereUniqueInput
    update: XOR<tachesUpdateWithoutAgentInput, tachesUncheckedUpdateWithoutAgentInput>
    create: XOR<tachesCreateWithoutAgentInput, tachesUncheckedCreateWithoutAgentInput>
  }

  export type tachesUpdateWithWhereUniqueWithoutAgentInput = {
    where: tachesWhereUniqueInput
    data: XOR<tachesUpdateWithoutAgentInput, tachesUncheckedUpdateWithoutAgentInput>
  }

  export type tachesUpdateManyWithWhereWithoutAgentInput = {
    where: tachesScalarWhereInput
    data: XOR<tachesUpdateManyMutationInput, tachesUncheckedUpdateManyWithoutAgentInput>
  }

  export type tachesScalarWhereInput = {
    AND?: tachesScalarWhereInput | tachesScalarWhereInput[]
    OR?: tachesScalarWhereInput[]
    NOT?: tachesScalarWhereInput | tachesScalarWhereInput[]
    id?: IntFilter<"taches"> | number
    mail_id?: IntFilter<"taches"> | number
    agent_user_id?: IntFilter<"taches"> | number
    statut_tache?: EnumMailStatutFilter<"taches"> | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFilter<"taches"> | $Enums.MailPriorite
    date_attribution?: DateTimeNullableFilter<"taches"> | Date | string | null
    commentaire?: StringNullableFilter<"taches"> | string | null
  }

  export type staffCreateWithoutMailInput = {
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
    departement?: departementsCreateNestedOneWithoutStaffInput
    users?: usersCreateNestedOneWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutMailInput = {
    id?: number
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    departement_id?: number | null
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
    users?: usersUncheckedCreateNestedOneWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutMailInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutMailInput, staffUncheckedCreateWithoutMailInput>
  }

  export type categoryCreateWithoutMailInput = {
    nom_categorie: string
  }

  export type categoryUncheckedCreateWithoutMailInput = {
    id?: number
    nom_categorie: string
  }

  export type categoryCreateOrConnectWithoutMailInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutMailInput, categoryUncheckedCreateWithoutMailInput>
  }

  export type privacyCreateWithoutMailInput = {
    niveau_confidentialite: string
  }

  export type privacyUncheckedCreateWithoutMailInput = {
    id?: number
    niveau_confidentialite: string
  }

  export type privacyCreateOrConnectWithoutMailInput = {
    where: privacyWhereUniqueInput
    create: XOR<privacyCreateWithoutMailInput, privacyUncheckedCreateWithoutMailInput>
  }

  export type tachesCreateWithoutMailInput = {
    statut_tache?: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution?: Date | string | null
    commentaire?: string | null
    agent: usersCreateNestedOneWithoutTachesInput
  }

  export type tachesUncheckedCreateWithoutMailInput = {
    id?: number
    agent_user_id: number
    statut_tache?: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution?: Date | string | null
    commentaire?: string | null
  }

  export type tachesCreateOrConnectWithoutMailInput = {
    where: tachesWhereUniqueInput
    create: XOR<tachesCreateWithoutMailInput, tachesUncheckedCreateWithoutMailInput>
  }

  export type tachesCreateManyMailInputEnvelope = {
    data: tachesCreateManyMailInput | tachesCreateManyMailInput[]
    skipDuplicates?: boolean
  }

  export type staffUpsertWithoutMailInput = {
    update: XOR<staffUpdateWithoutMailInput, staffUncheckedUpdateWithoutMailInput>
    create: XOR<staffCreateWithoutMailInput, staffUncheckedCreateWithoutMailInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutMailInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutMailInput, staffUncheckedUpdateWithoutMailInput>
  }

  export type staffUpdateWithoutMailInput = {
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    departement?: departementsUpdateOneWithoutStaffNestedInput
    users?: usersUpdateOneWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutMailInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    departement_id?: NullableIntFieldUpdateOperationsInput | number | null
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    users?: usersUncheckedUpdateOneWithoutStaffNestedInput
  }

  export type categoryUpsertWithoutMailInput = {
    update: XOR<categoryUpdateWithoutMailInput, categoryUncheckedUpdateWithoutMailInput>
    create: XOR<categoryCreateWithoutMailInput, categoryUncheckedCreateWithoutMailInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutMailInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutMailInput, categoryUncheckedUpdateWithoutMailInput>
  }

  export type categoryUpdateWithoutMailInput = {
    nom_categorie?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutMailInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_categorie?: StringFieldUpdateOperationsInput | string
  }

  export type privacyUpsertWithoutMailInput = {
    update: XOR<privacyUpdateWithoutMailInput, privacyUncheckedUpdateWithoutMailInput>
    create: XOR<privacyCreateWithoutMailInput, privacyUncheckedCreateWithoutMailInput>
    where?: privacyWhereInput
  }

  export type privacyUpdateToOneWithWhereWithoutMailInput = {
    where?: privacyWhereInput
    data: XOR<privacyUpdateWithoutMailInput, privacyUncheckedUpdateWithoutMailInput>
  }

  export type privacyUpdateWithoutMailInput = {
    niveau_confidentialite?: StringFieldUpdateOperationsInput | string
  }

  export type privacyUncheckedUpdateWithoutMailInput = {
    id?: IntFieldUpdateOperationsInput | number
    niveau_confidentialite?: StringFieldUpdateOperationsInput | string
  }

  export type tachesUpsertWithWhereUniqueWithoutMailInput = {
    where: tachesWhereUniqueInput
    update: XOR<tachesUpdateWithoutMailInput, tachesUncheckedUpdateWithoutMailInput>
    create: XOR<tachesCreateWithoutMailInput, tachesUncheckedCreateWithoutMailInput>
  }

  export type tachesUpdateWithWhereUniqueWithoutMailInput = {
    where: tachesWhereUniqueInput
    data: XOR<tachesUpdateWithoutMailInput, tachesUncheckedUpdateWithoutMailInput>
  }

  export type tachesUpdateManyWithWhereWithoutMailInput = {
    where: tachesScalarWhereInput
    data: XOR<tachesUpdateManyMutationInput, tachesUncheckedUpdateManyWithoutMailInput>
  }

  export type mailCreateWithoutTachesInput = {
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    handler_user_id?: number | null
    expediteur?: staffCreateNestedOneWithoutMailInput
    categorie?: categoryCreateNestedOneWithoutMailInput
    privacy?: privacyCreateNestedOneWithoutMailInput
  }

  export type mailUncheckedCreateWithoutTachesInput = {
    id?: number
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    expediteur_staff_id?: number | null
    categorie_id?: number | null
    privacy_id?: number | null
    handler_user_id?: number | null
  }

  export type mailCreateOrConnectWithoutTachesInput = {
    where: mailWhereUniqueInput
    create: XOR<mailCreateWithoutTachesInput, mailUncheckedCreateWithoutTachesInput>
  }

  export type usersCreateWithoutTachesInput = {
    username: string
    password_hash: string
    role?: $Enums.UserRole
    staff?: staffCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTachesInput = {
    id?: number
    username: string
    password_hash: string
    role?: $Enums.UserRole
    staff_id?: number | null
  }

  export type usersCreateOrConnectWithoutTachesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTachesInput, usersUncheckedCreateWithoutTachesInput>
  }

  export type mailUpsertWithoutTachesInput = {
    update: XOR<mailUpdateWithoutTachesInput, mailUncheckedUpdateWithoutTachesInput>
    create: XOR<mailCreateWithoutTachesInput, mailUncheckedCreateWithoutTachesInput>
    where?: mailWhereInput
  }

  export type mailUpdateToOneWithWhereWithoutTachesInput = {
    where?: mailWhereInput
    data: XOR<mailUpdateWithoutTachesInput, mailUncheckedUpdateWithoutTachesInput>
  }

  export type mailUpdateWithoutTachesInput = {
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    expediteur?: staffUpdateOneWithoutMailNestedInput
    categorie?: categoryUpdateOneWithoutMailNestedInput
    privacy?: privacyUpdateOneWithoutMailNestedInput
  }

  export type mailUncheckedUpdateWithoutTachesInput = {
    id?: IntFieldUpdateOperationsInput | number
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    expediteur_staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy_id?: NullableIntFieldUpdateOperationsInput | number | null
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUpsertWithoutTachesInput = {
    update: XOR<usersUpdateWithoutTachesInput, usersUncheckedUpdateWithoutTachesInput>
    create: XOR<usersCreateWithoutTachesInput, usersUncheckedCreateWithoutTachesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTachesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTachesInput, usersUncheckedUpdateWithoutTachesInput>
  }

  export type usersUpdateWithoutTachesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    staff?: staffUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTachesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    staff_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type staffCreateManyDepartementInput = {
    id?: number
    nom_complet: string
    adresse_mail: string
    statut_hierarchique: $Enums.StaffHierarchie
    est_marie?: boolean
    nombre_enfants?: number
    genre: $Enums.Genre
  }

  export type staffUpdateWithoutDepartementInput = {
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    mail?: mailUpdateManyWithoutExpediteurNestedInput
    users?: usersUpdateOneWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    mail?: mailUncheckedUpdateManyWithoutExpediteurNestedInput
    users?: usersUncheckedUpdateOneWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateManyWithoutDepartementInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_complet?: StringFieldUpdateOperationsInput | string
    adresse_mail?: StringFieldUpdateOperationsInput | string
    statut_hierarchique?: EnumStaffHierarchieFieldUpdateOperationsInput | $Enums.StaffHierarchie
    est_marie?: BoolFieldUpdateOperationsInput | boolean
    nombre_enfants?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
  }

  export type mailCreateManyCategorieInput = {
    id?: number
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    expediteur_staff_id?: number | null
    privacy_id?: number | null
    handler_user_id?: number | null
  }

  export type mailUpdateWithoutCategorieInput = {
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    expediteur?: staffUpdateOneWithoutMailNestedInput
    privacy?: privacyUpdateOneWithoutMailNestedInput
    taches?: tachesUpdateManyWithoutMailNestedInput
  }

  export type mailUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    expediteur_staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy_id?: NullableIntFieldUpdateOperationsInput | number | null
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    taches?: tachesUncheckedUpdateManyWithoutMailNestedInput
  }

  export type mailUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    expediteur_staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy_id?: NullableIntFieldUpdateOperationsInput | number | null
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mailCreateManyPrivacyInput = {
    id?: number
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    expediteur_staff_id?: number | null
    categorie_id?: number | null
    handler_user_id?: number | null
  }

  export type mailUpdateWithoutPrivacyInput = {
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    expediteur?: staffUpdateOneWithoutMailNestedInput
    categorie?: categoryUpdateOneWithoutMailNestedInput
    taches?: tachesUpdateManyWithoutMailNestedInput
  }

  export type mailUncheckedUpdateWithoutPrivacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    expediteur_staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    taches?: tachesUncheckedUpdateManyWithoutMailNestedInput
  }

  export type mailUncheckedUpdateManyWithoutPrivacyInput = {
    id?: IntFieldUpdateOperationsInput | number
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    expediteur_staff_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mailCreateManyExpediteurInput = {
    id?: number
    objet: string
    contenu?: string | null
    date_reception?: Date | string
    categorie_id?: number | null
    privacy_id?: number | null
    handler_user_id?: number | null
  }

  export type mailUpdateWithoutExpediteurInput = {
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie?: categoryUpdateOneWithoutMailNestedInput
    privacy?: privacyUpdateOneWithoutMailNestedInput
    taches?: tachesUpdateManyWithoutMailNestedInput
  }

  export type mailUncheckedUpdateWithoutExpediteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy_id?: NullableIntFieldUpdateOperationsInput | number | null
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    taches?: tachesUncheckedUpdateManyWithoutMailNestedInput
  }

  export type mailUncheckedUpdateManyWithoutExpediteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    objet?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date_reception?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy_id?: NullableIntFieldUpdateOperationsInput | number | null
    handler_user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tachesCreateManyAgentInput = {
    id?: number
    mail_id: number
    statut_tache?: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution?: Date | string | null
    commentaire?: string | null
  }

  export type tachesUpdateWithoutAgentInput = {
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: mailUpdateOneRequiredWithoutTachesNestedInput
  }

  export type tachesUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail_id?: IntFieldUpdateOperationsInput | number
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tachesUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail_id?: IntFieldUpdateOperationsInput | number
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tachesCreateManyMailInput = {
    id?: number
    agent_user_id: number
    statut_tache?: $Enums.MailStatut
    priorite_calculee: $Enums.MailPriorite
    date_attribution?: Date | string | null
    commentaire?: string | null
  }

  export type tachesUpdateWithoutMailInput = {
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    agent?: usersUpdateOneRequiredWithoutTachesNestedInput
  }

  export type tachesUncheckedUpdateWithoutMailInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_user_id?: IntFieldUpdateOperationsInput | number
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tachesUncheckedUpdateManyWithoutMailInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_user_id?: IntFieldUpdateOperationsInput | number
    statut_tache?: EnumMailStatutFieldUpdateOperationsInput | $Enums.MailStatut
    priorite_calculee?: EnumMailPrioriteFieldUpdateOperationsInput | $Enums.MailPriorite
    date_attribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}